// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@unocss/nuxt", "@nuxt/devtools", "@nuxtjs/html-validator"],
  css: ["~/assets/Poppins.css"],
  routeRules: {
    card: { swr: true },
  },
  unocss: {
    preflight: true,
  },
});

