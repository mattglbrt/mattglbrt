import { type VideoChannel, videosConfig } from "../../config/videos";

export type Video = {
  id: string;
  title: string;
  url: string;
  published: Date;
  channel: string;
  thumbnail?: string;
};

const FEED_BASE = "https://www.youtube.com/feeds/videos.xml?channel_id=";
const FETCH_TIMEOUT_MS = 8000;

// Build-time merge of the newest uploads across every configured channel.
// Network failures are swallowed per-channel so an unreachable feed never
// breaks the build (CLAUDE.md §6) — it just contributes no videos.
export async function getLatestVideos(limit = videosConfig.latestCount): Promise<Video[]> {
  const channels = videosConfig.channels.filter((channel) => channel.channelId);
  const results = await Promise.all(channels.map(fetchChannelVideos));
  const deduped = dedupeById(results.flat());

  deduped.sort((left, right) => right.published.getTime() - left.published.getTime());
  return deduped.slice(0, limit);
}

async function fetchChannelVideos(channel: VideoChannel): Promise<Video[]> {
  if (!channel.channelId) {
    return [];
  }

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), FETCH_TIMEOUT_MS);

  try {
    const response = await fetch(`${FEED_BASE}${channel.channelId}`, {
      signal: controller.signal,
      headers: { "user-agent": "mattglbrt.com build (+https://mattglbrt.com)" }
    });

    if (!response.ok) {
      return [];
    }

    return parseFeed(await response.text(), channel.name);
  } catch {
    return [];
  } finally {
    clearTimeout(timeout);
  }
}

function parseFeed(xml: string, fallbackName: string): Video[] {
  const feedTitle = matchOne(xml, /<title>([\s\S]*?)<\/title>/);
  const channelName = decodeEntities(feedTitle ?? fallbackName);

  return xml
    .split("<entry>")
    .slice(1)
    .map((entry) => parseEntry(entry, channelName))
    .filter((video): video is Video => video !== null);
}

function parseEntry(entry: string, channelName: string): Video | null {
  const id = matchOne(entry, /<yt:videoId>([\s\S]*?)<\/yt:videoId>/);
  const title = matchOne(entry, /<title>([\s\S]*?)<\/title>/);
  const published = matchOne(entry, /<published>([\s\S]*?)<\/published>/);

  if (!id || !title || !published) {
    return null;
  }

  const publishedDate = new Date(published);

  if (Number.isNaN(publishedDate.getTime())) {
    return null;
  }

  return {
    id,
    title: decodeEntities(title),
    url: `https://www.youtube.com/watch?v=${id}`,
    published: publishedDate,
    channel: channelName,
    thumbnail: matchOne(entry, /<media:thumbnail[^>]*\burl="([^"]+)"/) ?? undefined
  };
}

function dedupeById(videos: Video[]): Video[] {
  const seen = new Set<string>();
  const unique: Video[] = [];

  for (const video of videos) {
    if (seen.has(video.id)) {
      continue;
    }

    seen.add(video.id);
    unique.push(video);
  }

  return unique;
}

function matchOne(input: string, pattern: RegExp): string | null {
  return input.match(pattern)?.[1]?.trim() ?? null;
}

function decodeEntities(input: string): string {
  return input
    .replaceAll("&lt;", "<")
    .replaceAll("&gt;", ">")
    .replaceAll("&quot;", '"')
    .replaceAll("&#39;", "'")
    .replaceAll("&apos;", "'")
    .replace(/&#(\d+);/g, (_, code) => String.fromCodePoint(Number(code)))
    .replace(/&#x([0-9a-f]+);/gi, (_, code) => String.fromCodePoint(Number.parseInt(code, 16)))
    .replaceAll("&amp;", "&");
}
