import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    image: z.string(),
    tags: z.array(z.string()).optional(),
    projectRelated: z.string().optional(),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    framework: z.string(),
    fecha: z.string(),
    empresa: z.string().optional(),
    empresaLink: z.string().optional(),
    image: z.string(),
    mobileImage: z.string().optional(),
    link: z.string().optional(),
    skills: z.array(z.string()),
    order: z.number(),
  }),
});

export const collections = { blog, projects };
