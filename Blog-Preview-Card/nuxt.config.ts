export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["assets/Fonts.css"],
  modules: [
    "@vueuse/nuxt",
    "@nuxt/image",
    "@unocss/nuxt",
    "@nuxtjs/html-validator",
    "@nuxtseo/module",
  ],
  site: {
    url: "http://arbpc.netlify.app",
    name: "Blog Preview Card",
    description: "A simple blog preview card component",
    defaultLocale: "en",
  },
  unocss: {
    preflight: true,
  },
});
