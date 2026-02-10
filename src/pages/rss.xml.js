import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { settings } from '../data/settings';

export async function GET(context) {
  const posts = await getCollection('posts', ({ data }) => {
    return !data.draft && data.date <= new Date();
  });

  const sortedPosts = posts.sort(
    (a, b) => b.data.date.valueOf() - a.data.date.valueOf()
  );

  return rss({
    title: settings.site.title,
    description: settings.site.description,
    site: context.site,
    items: sortedPosts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.description,
      link: `/post/${post.id}/`,
      categories: post.data.tags || [],
      author: settings.author.name,
    })),
  });
}