// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  site: "https://cienmares.es",
  integrations: [
    tailwind(),
    sitemap({
      filter: (page) => !page.includes("/_"),
      changefreq: "weekly",
      priority: 0.7,
      lastmod: new Date(),
      i18n: {
        defaultLocale: "es",
        locales: {
          es: "es-ES",
        },
      },
    }),
    // Partytown disabled to avoid deprecated APIs warnings
    // partytown({
    //   config: {
    //     forward: ["dataLayer.push"],
    //   },
    // }),
  ],
  prefetch: {
    prefetchAll: true,
    defaultStrategy: "hover",
  },
  build: {
    format: "directory",
    inlineStylesheets: "auto",
  },
  compressHTML: true,
  vite: {
    build: {
      cssMinify: true,
      minify: true,
    },
    ssr: {
      noExternal: ["gsap"],
    },
  },
  experimental: {
    clientPrerender: true,
  },
});
