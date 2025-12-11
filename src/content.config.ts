import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Vlog collection - for video posts with transcripts
const vlog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/vlog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    // Video-specific fields
    videoId: z.string(), // YouTube video ID (required for vlog)
    videoUrl: z.string().optional(), // Full video URL
    channelName: z.string().optional(), // Which channel it's from
    duration: z.string().optional(), // e.g., "12:34"
    // Common fields
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

// Resources collection - for text-based articles
const resources = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/resources' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
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

export const collections = { vlog, resources, newsletter };
