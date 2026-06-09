export type VideoChannel = {
  // Display name shown beside each video in the list.
  name: string;
  // YouTube channel ID (starts with "UC"). null = not wired in yet; the build
  // skips it gracefully until an ID is supplied.
  channelId: string | null;
  // Public channel URL, used for the "subscribe" links and the empty state.
  url: string;
};

export type VideosConfig = {
  // How many of the newest videos (merged across channels) to render.
  latestCount: number;
  channels: VideoChannel[];
};

// Latest uploads are pulled from each channel's RSS feed at BUILD time and
// merged here (see src/modules/videos/feed.ts). Resolve a handle -> channel ID
// once with: curl -sL https://www.youtube.com/@HANDLE | grep -o '"externalId":"UC[^"]*"'
export const videosConfig: VideosConfig = {
  latestCount: 12,
  channels: [
    {
      name: "The Hobbinomicon",
      channelId: "UCbR2bbWKoxPvSHJfkmPGetg",
      url: "https://www.youtube.com/@TheHobbinomicon"
    },
    {
      name: "Daily Hobby Vlog",
      channelId: "UCloue_Zf7JyQ7rhyvxW7zSg",
      url: "https://www.youtube.com/@Hobbinomicon"
    },
    {
      name: "Alone in the Dungeon",
      channelId: "UCfUblx_6u1hhVDNrMbNQdkA",
      url: "https://www.youtube.com/@AloneInTheDungeon"
    },
    // These channels are live but have no uploads yet; the feed merge handles
    // empty channels gracefully and they'll auto-appear on the first upload.
    {
      name: "Hobbinomicon: Warmachine",
      channelId: "UCjDu0HF6SdLgJLb7d-zxFtQ",
      url: "https://www.youtube.com/@TheHobbinomiconWarmachine"
    },
    {
      name: "Hobbinomicon: KDM",
      channelId: "UC8605grw5cw-xlThSBW304g",
      url: "https://www.youtube.com/@TheHobbinomiconKDM"
    }
  ]
};
