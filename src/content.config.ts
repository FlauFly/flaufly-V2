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
  }),
});

const travels = defineCollection({
  loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: "./src/content/travels" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      startDate: z.date(),
      endDate: z.date(),
      cover: image().optional(),
    }),
});
// Export a single `collections` object to register your collection(s)
export const collections = { blog, travels };
