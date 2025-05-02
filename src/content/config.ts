import { defineCollection, z } from 'astro:content';

// Define the schema for blog posts
const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    image: z.string(),
    tags: z.array(z.string()).optional(),
    projectRelated: z.string().optional(),
  }),
});
const projectsCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    // otros campos que necesites
  })
});

// Export the collections object with your defined collections
export const collections = {
  'blog': blogCollection,
  'projects': projectsCollection,
};