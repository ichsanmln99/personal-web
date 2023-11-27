import { globSync } from "glob";
const routes = globSync("./content/posts/*.md").map((path) =>
  path.slice(7, -3)
);

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ["@nuxt/content", "nuxt-icon", "dayjs-nuxt", "@nuxt/image"],
  extends: ["nuxt-seo-kit"],
  runtimeConfig: {
    public: {
      siteUrl: "https://ichsanmaulana.com",
      siteName: "Ichsan Maulana",
      siteDescription:
        "Welcome to my Digital Playground where I experiment & sharing about programming stuff!",
      language: "en", // prefer more explicit language codes like `en-AU` over `en`
      titleSeparator: "-",
    },
  },
  content: {
    highlight: {
      theme: "poimandres",
    },
  },
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  nitro: {
    prerender: {
      routes: [...routes],
    },
  },
  image: {},
});
