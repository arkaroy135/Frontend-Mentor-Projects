// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@unocss/nuxt', '@vueuse/nuxt', 'nuxt-icon'],
  css: ['~/assets/fonts/Manrope.css'],
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
