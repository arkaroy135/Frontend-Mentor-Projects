// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@unocss/nuxt", "nuxt-icon", "nuxt-icons", "@nuxt/devtools"],
  css: ["~/assets/fonts/OpenSans.css", "~/assets/fonts/Poppins.css"],
  unocss: {
    preflight: true,
  },
});

