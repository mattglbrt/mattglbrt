export interface YouTubeVideo {
  channelName: string;
  videoId: string;
  title: string;
  thumbnail: string;
  publishedAt: string;
  channelUrl: string;
}

export async function getLatestVideos(
  channels: { name: string; channelId: string }[]
): Promise<YouTubeVideo[]> {
  const apiKey = import.meta.env.YOUTUBE_API_KEY;

  if (!apiKey) {
    console.warn('YOUTUBE_API_KEY not set — skipping video fetch');
    return [];
  }

  const results: YouTubeVideo[] = [];

  for (const channel of channels) {
    try {
      const searchUrl = new URL('https://www.googleapis.com/youtube/v3/search');
      searchUrl.searchParams.set('part', 'snippet');
      searchUrl.searchParams.set('channelId', channel.channelId);
      searchUrl.searchParams.set('maxResults', '1');
      searchUrl.searchParams.set('order', 'date');
      searchUrl.searchParams.set('type', 'video');
      searchUrl.searchParams.set('key', apiKey);

      const res = await fetch(searchUrl.toString());

      if (!res.ok) {
        console.error(`YouTube API error for ${channel.name}:`, await res.text());
        continue;
      }

      const data = await res.json();
      const item = data.items?.[0];

      if (item) {
        results.push({
          channelName: channel.name,
          videoId: item.id.videoId,
          title: item.snippet.title,
          thumbnail: item.snippet.thumbnails.high?.url ?? item.snippet.thumbnails.medium?.url,
          publishedAt: item.snippet.publishedAt,
          channelUrl: `https://www.youtube.com/channel/${channel.channelId}`,
        });
      }
    } catch (err) {
      console.error(`Failed to fetch videos for ${channel.name}:`, err);
    }
  }

  return results;
}
