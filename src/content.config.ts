// Import the glob loader
import { glob } from "astro/loaders";
// Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";
// Define a `loader` and `schema` for each collection
const essaysCollection = defineCollection({
  loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: "./src/content/essays" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    startDate: z.date(),
    updated: z.date(),
    type: z.literal("essay"),
    topics: z.array(z.string()),
    writingStage: z.string(),
    toc: z.boolean().optional(),
  }),
});

const notesCollection = defineCollection({
  loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: "./src/content/notes" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    startDate: z.date(),
    updated: z.date(),
    type: z.literal("note"),
    topics: z.array(z.string()),
    writingStage: z.string(),
    toc: z.boolean().optional(),
  }),
});

const destinationsCollection = defineCollection({
  loader: glob({
    pattern: "**/[^_]*.{md,mdx}",
    base: "./src/content/destinations/",
  }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      startDate: z.date(),
      endDate: z.date(),
      type: z.literal("destination"),
      cover: image().optional(),
      toc: z.boolean().optional(),
    }),
});

const traveloguesCollection = defineCollection({
  loader: glob({
    pattern: "**/[^_]*.{md,mdx}",
    base: "./src/content/travelogues/",
  }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      date: z.date(),
      type: z.literal("travelogue"),
      travel: z.string().optional(),
      location: z.string().optional(),
    }),
});

// Library / media collections, I put every medium in separate collection
const booksCollection = defineCollection({
  loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: "./src/content/library/books" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      finished: z.date(),
      author: z.string(),
      cover: image().optional(),
    }),
});

const moviesCollection = defineCollection({
  loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: "./src/content/library/movies" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      finished: z.date(),
      cover: image().optional(),
    }),
});

const showsCollection = defineCollection({
  loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: "./src/content/library/shows" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      finished: z.date(),
      cover: image().optional(),
    }),
});

const gamesCollection = defineCollection({
  loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: "./src/content/library/games" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      finished: z.date(),
      cover: image().optional(),
    }),
});

// Export a single `collections` object to register your collection(s)
export const collections = {
  essaysCollection,
  notesCollection,
  destinationsCollection,
  traveloguesCollection,
  booksCollection,
  moviesCollection,
  showsCollection,
  gamesCollection
};
