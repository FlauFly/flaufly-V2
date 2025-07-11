// @ts-check
import { defineConfig } from 'astro/config';

import mdx from "@astrojs/mdx";

import tailwindcss from "@tailwindcss/vite";

import react from "@astrojs/react";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: "https://flaufly.com",
  integrations: [mdx(), react(), icon()],

  vite: {
    plugins: [tailwindcss()]
  }
});