// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@unocss/nuxt', '@vueuse/nuxt', 'nuxt-icon', '@nuxtjs/html-validator'],
  css: ['~/assets/fonts/Manrope.css'],
  htmlValidator: {
    // usePrettier: false,
    logLevel: 'verbose',
    failOnError: false,
    options: {
      extends: [
        'html-validate:document',
        'html-validate:recommended',
        'html-validate:standard'
      ],
      rules: {
        'svg-focusable': 'off',
        'no-unknown-elements': 'error',
        // Conflicts or not needed as we use prettier formatting
        'void-style': 'off',
        'no-trailing-whitespace': 'off',
        // Conflict with Nuxt defaults
        'require-sri': 'off',
        'attribute-boolean-style': 'off',
        'doctype-style': 'off',
        // Unreasonable rule
        'no-inline-style': 'off'
      }
    }
  },
  typescript: {
    shim: false
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
        'manrope': 'Manrope'
      },
      colors: {
        'bodyBg': 'hsl(218,23%,16%)',
        'cardBg': 'hsl(217,19%,24%)',
        'neonGreen': 'hsl(150,100%,66%)',
        'textCol': 'hsl(193,38%,86%)',
        'grayishBlue': 'hsl(217,19%,38%)'
      },
    }
  }
})
