import { globSync } from "glob";
const routes = globSync("./content/posts/*.md").map((path) =>
  path.slice(7, -3)
);

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ["@nuxt/content", "nuxt-icon", "dayjs-nuxt"],
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
});
