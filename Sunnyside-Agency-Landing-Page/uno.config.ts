// uno.config.ts
import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetTagify,
  presetMini,
  presetWind,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
} from "unocss";

export default defineConfig({
  theme: {
    fontFamily: {
      Barlow: "Barlow",
      Fraunces: "Fraunces",
    },
    fontSize: {
      body: "1.125rem",
    },
    colors: {
      SoftRed: "hsl(7, 99%, 70%)",
      Yellow: "hsl(51, 100%, 49%)",
      DarkDesaturatedCyan: "hsl(167, 40%, 24%)",
      DarkBlue: "hsl(198, 62%, 26%)",
      DarkModerateCyan: "hsl(168, 34%, 41%)",
      VeryDarkDesaturatedBlue: "hsl(212, 27%, 19%)",
      VeryDarkGrayishBlue: "hsl(213, 9%, 39%)",
      DarkGrayishBlue: "hsl(232, 10%, 55%)",
      GrayishBlue: "hsl(210, 4%, 67%)",
      White: "hsl(0, 0%, 100%)",
      Navbar: "hsl(200, 100%, 62%)",
    },
  },
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons(),
    presetTypography(),
    presetTagify(),
    presetWind(),
    presetMini(),
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
});

