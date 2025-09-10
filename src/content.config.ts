import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const posts = defineCollection({
  loader: glob({ pattern: ["**/*.{md,mdx}"], base: "./src/content/posts" }),
  // TODO: add post schema
  schema: z.object({}),
});

export const collections = { posts };
