// Import the glob loader
import { glob } from "astro/loaders";
// Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";
// Define a `loader` and `schema` for each collection
const blog = defineCollection({
  loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: "./src/content/essays" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    startDate: z.date(),
    updated: z.date(),
    topics: z.array(z.string()),
    writingStage: z.string(),
    toc: z.boolean().optional(),
  }),
});

const destinations = defineCollection({
  loader: glob({
    pattern: "**/[^_]*.{md,mdx}",
    base: "./src/content/destinations/",
  }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      startDate: z.date(),
      endDate: z.date(),
      cover: image().optional(),
      toc: z.boolean().optional(),
    }),
});

const travelogues = defineCollection({
  loader: glob({
    pattern: "**/[^_]*.{md,mdx}",
    base: "./src/content/travelogues/",
  }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      date: z.date(),
      travel: z.string().optional(),
      location: z.string().optional(),
    }),
});

// Export a single `collections` object to register your collection(s)
export const collections = { blog, destinations, travelogues };
