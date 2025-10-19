// @ts-check
import { defineConfig } from "astro/config";

import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import icon from "astro-icon";
import remarkToc from "remark-toc";

// https://astro.build/config
export default defineConfig({
  site: "https://flaufly.com",
  markdown: {
    remarkPlugins: [[remarkToc, { heading: "contents", maxDepth: 3 }]],
  },
  integrations: [
    mdx({
      remarkPlugins: [[remarkToc, { heading: "contents  ", maxDepth: 3 }]],
    }),
    react(),
    icon(),
  ],
});
