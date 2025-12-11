import type { APIRoute, GetStaticPaths } from 'astro';
import { getCollection } from 'astro:content';
import { generateOgImage } from '../../../lib/og-image';

export const prerender = false;

export const GET: APIRoute = async ({ params }) => {
  const { slug } = params;

  if (!slug) {
    return new Response('Not found', { status: 404 });
  }

  const resources = await getCollection('resources');
  const post = resources.find((p) => p.id === slug || p.id === `${slug}.md`);

  if (!post) {
    return new Response('Not found', { status: 404 });
  }

  const png = await generateOgImage(post.data.title, post.data.description);

  return new Response(png, {
    headers: {
      'Content-Type': 'image/png',
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  });
};
