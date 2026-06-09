import { textmodeConfig } from "../../config";
import { videosConfig } from "../../config/videos";
import { externalLink, link, textHtml } from "../textmode/core/html";
import { cellWidth, truncateCells } from "../textmode/core/layout";
import type { Video } from "./feed";

const width = textmodeConfig.bodyWidth;
const rule = "─".repeat(width);

export function renderVideosPre(videos: Video[]): string {
  const heading = textHtml("~ latest videos");
  const body = videos.length === 0 ? renderEmpty() : videos.map(renderVideoLine).join("\n");
  const footer = textHtml("  new uploads appear here automatically — the feed rebuilds daily.");

  return `\n${heading}\n${textHtml(rule)}\n\n${body}\n\n${textHtml(rule)}\n${footer}\n\nret ${link("/", "<home>")}\n`;
}

function renderVideoLine(video: Video): string {
  const prefix = `  ${formatDate(video.published)}  `;
  const tail = `  ${video.channel}`;
  const titleWidth = Math.max(8, width - cellWidth(prefix) - cellWidth(tail) - 2);
  const displayTitle = truncateCells(video.title, titleWidth);
  const titleLink = externalLink(video.url, displayTitle);
  const visibleLeft = `${prefix}${displayTitle}`;
  const dots = ".".repeat(Math.max(2, width - cellWidth(visibleLeft) - cellWidth(tail) - 1));

  return `${textHtml(prefix)}${titleLink} ${dots}${textHtml(tail)}`;
}

function renderEmpty(): string {
  const intro = textHtml("  No videos to show yet. The build couldn't reach the feeds, or no");
  const intro2 = textHtml("  channels have uploads. Subscribe in the meantime:");
  const channelLines = videosConfig.channels
    .filter((channel) => channel.url)
    .map((channel) => `    ${externalLink(channel.url, channel.name)}`);

  return [intro, intro2, "", ...channelLines].join("\n");
}

function formatDate(date: Date): string {
  return date.toISOString().slice(0, 10);
}
