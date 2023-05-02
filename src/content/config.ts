// 1. Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";
// 2. Define your collection(s)
const buildThatThingCollection = defineCollection({
  schema: z.object({
    layout: z.string(),
    title: z.string(),
    date: z.date(),
    description: z.string(),
  }),
});
// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  "build-that-thing": buildThatThingCollection,
};
