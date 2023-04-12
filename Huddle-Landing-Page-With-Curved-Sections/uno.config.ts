// uno.config.ts
import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetTagify,
  presetWind,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
} from "unocss";

export default defineConfig({
  shortcuts: [
    // ...
  ],
  theme: {
    fontFamily: {
      Poppins: "Poppins",
      OpenSans: "OpenSans",
    },
    colors: {
      Pink: "hsl(322, 100%, 66%)",
      LightPink: "hsl(321, 100%, 78%)",
      LightRed: "hsl(0, 100%, 63%)",
      VeryDarkCyan: "hsl(192, 100%, 9%)",
      VeryPaleBlue: "hsl(210, 100%, 98%)",
      FooterLink: "hsl(228, 45%, 44%)",
    },
  },
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons(),
    presetTypography(),
    presetTagify(),
    presetWind(),
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
});

