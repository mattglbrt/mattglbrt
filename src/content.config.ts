import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Blog collection - for video posts with transcripts and general blog posts
const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    // Video-specific fields (optional for regular blog posts)
    videoId: z.string().optional(), // YouTube video ID
    videoUrl: z.string().optional(), // Full video URL
    channelName: z.string().optional(), // Which channel it's from
    duration: z.string().optional(), // e.g., "12:34"
    // Common fields
    heroImage: z.string().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

// Newsletter collection - for archived newsletter editions
const newsletter = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/newsletter' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    issueNumber: z.number(),
    pubDate: z.coerce.date(),
    // Optional link to web version
    webVersionUrl: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog, newsletter };
