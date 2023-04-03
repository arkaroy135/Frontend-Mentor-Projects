import { defineNuxtConfig } from "nuxt/config";
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@unocss/nuxt",
    "@vueuse/nuxt",
    "nuxt-icon",
    "@nuxtjs/html-validator",
  ],
  css: ["~/assets/fonts/Inter.css"],
  htmlValidator: {
    // usePrettier: false,
    logLevel: "verbose",
    failOnError: false,
    options: {
      extends: [
        "html-validate:document",
        "html-validate:recommended",
        "html-validate:standard",
      ],
      rules: {
        "svg-focusable": "off",
        "no-unknown-elements": "error",
        // Conflicts or not needed as we use prettier formatting
        "void-style": "off",
        "no-trailing-whitespace": "off",
        // Conflict with Nuxt defaults
        "require-sri": "off",
        "attribute-boolean-style": "off",
        "doctype-style": "off",
        // Unreasonable rule
        "no-inline-style": "off",
      },
    },
  },
  unocss: {
    uno: true,
    icons: true,
    attributify: true,
    preflight: true,
    webFonts: true,
    typography: true,
    tagify: true,
    theme: {
      fontFamily: {
        inter: "Inter",
      },
      colors: {
        softOrange: "hsl(35,77%,62%)",
        softRed: "hsl(5,85%,63%)",
        offWhite: "hsl(36,100%,99%)",
        grayishBlue: "hsl(233,8%,79%)",
        darkGrayishBlue: "hsl(236,13%,42%)",
        veryDarkBlue: "hsl(240,100%,5%)",
        footerLink: "hsl(228,45%,44%)",
      },
    },
  },
});

