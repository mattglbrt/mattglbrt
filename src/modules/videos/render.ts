import { textmodeConfig } from "../../config";
import { videosConfig } from "../../config/videos";
import { externalLink, link, textHtml } from "../textmode/core/html";
import { truncateCells, wrapWordsCells } from "../textmode/core/layout";
import type { Video } from "./feed";

const width = textmodeConfig.bodyWidth;
const rule = "─".repeat(width);

export function renderVideosPre(videos: Video[]): string {
  const heading = textHtml("~ latest videos");
  const body = videos.length === 0 ? renderEmpty() : videos.map(renderVideoLine).join("\n\n");
  const footer = textHtml("  new uploads appear here automatically —\n  the feed rebuilds daily.");

  return `\n${heading}\n${textHtml(rule)}\n\n${body}\n\n${textHtml(rule)}\n${footer}\n\nret ${link("/", "<home>")}\n`;
}

// Stacked two-line entry — title (wrapped + linked) over a dim
// "date · channel" line. Reads cleanly on narrow phone widths where a
// single date/title/channel row would crush the title.
function renderVideoLine(video: Video): string {
  const indent = "  ";
  const inner = width - indent.length;
  const titleBlock = wrapWordsCells(video.title, inner)
    .map((line) => `${indent}${line}`)
    .join("\n");
  const title = externalLink(video.url, titleBlock);
  const meta = truncateCells(`${formatDate(video.published)} · ${video.channel}`, inner);

  return `${title}\n${indent}${textHtml(meta)}`;
}

function renderEmpty(): string {
  const intro = textHtml("  No videos to show yet. The build couldn't");
  const intro2 = textHtml("  reach the feeds, or no channels have uploads.");
  const intro3 = textHtml("  Subscribe in the meantime:");
  const channelLines = videosConfig.channels
    .filter((channel) => channel.url)
    .map((channel) => `    ${externalLink(channel.url, channel.name)}`);

  return [intro, intro2, intro3, "", ...channelLines].join("\n");
}

function formatDate(date: Date): string {
  return date.toISOString().slice(0, 10);
}
