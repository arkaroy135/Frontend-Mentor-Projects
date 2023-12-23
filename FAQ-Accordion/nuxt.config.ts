export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@unocss/nuxt",
    "nuxt-icon",
    "@nuxtjs/html-validator",
    "@una-ui/nuxt",
    "@nuxtseo/module",
    "@vueuse/nuxt",
  ],
  css: ["assets/Fonts.css"],
  site: {
    url: "https://arfaq.netlify.app",
    name: "FAQ Accordion",
    description: "This is a FAQ Accordion example site",
    defaultLocale: "en",
  },
  unocss: {
    preflight: true,
  },
  una: {
    prefix: "N",
  },
});
