export default defineNuxtConfig({
  modules: ["@unocss/nuxt", "nuxt-icon", "@nuxt/devtools", "@nuxt/image-edge"],
  css: ["~/assets/fonts/Barlow.css", "~/assets/fonts/Fraunces.css"],
  ssr: true,
  unocss: {
    preflight: true,
  },
});

