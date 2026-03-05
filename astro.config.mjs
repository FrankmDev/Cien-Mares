// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://cienmares.es",
  integrations: [tailwind()],
  prefetch: {
    prefetchAll: true,
    defaultStrategy: "hover",
  },
  build: {
    format: "directory",
  },
});
