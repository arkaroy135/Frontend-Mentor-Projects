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
      PoppinsBold: "PoppinsBold",
      PoppinsXBold: "PoppinsXBold",
      PoppinsItalic: "PoppinsItalic",
    },
    fontSize: {
      input: "2rem",
    },
    colors: {
      Purple: "hsl(259, 100%, 65%)",
      LightRed: "hsl(0, 100%, 67%)",
      White: "hsl(0, 0%, 100%)",
      OffWhite: "hsl(0, 0%, 94%)",
      LightGrey: "hsl(0, 0%, 86%)",
      SmokeyGrey: "hsl(0, 1%, 44%)",
      OffBlack: "hsl(0, 0%, 8%)",
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

