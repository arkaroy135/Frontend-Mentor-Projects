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
  shortcuts: {},
  rules: [
    [/^m([\.\d]+)$/, ([, d]) => ({ margin: `${+d / 4}em` })],
    [/^m-([\.\d]+)$/, ([, d]) => ({ margin: `${+d / 4}em` })],
    [/^mt([\.\d]+)$/, ([, d]) => ({ "margin-top": `${+d / 4}em` })],
    [/^mb([\.\d]+)$/, ([, d]) => ({ "margin-bottom": `${+d / 4}em` })],
    [/^mt-([\.\d]+)$/, ([, d]) => ({ "margin-top": `${+d / 4}em` })],
    [/^mb-([\.\d]+)$/, ([, d]) => ({ "margin-bottom": `${+d / 4}em` })],
    [/^ml([\.\d]+)$/, ([, d]) => ({ "margin-left": `${+d / 4}em` })],
    [/^mr([\.\d]+)$/, ([, d]) => ({ "margin-right": `${+d / 4}em` })],
    [/^ml-([\.\d]+)$/, ([, d]) => ({ "margin-left": `${+d / 4}em` })],
    [/^mr-([\.\d]+)$/, ([, d]) => ({ "margin-right": `${+d / 4}em` })],
    [
      /^mx([\.\d]+)$/,
      ([, d]) => ({
        "margin-left": `${+d / 4}em`,
        "margin-right": `${+d / 4}em`,
      }),
    ],
    [
      /^mx-([\.\d]+)$/,
      ([, d]) => ({
        "margin-left": `${+d / 4}em`,
        "margin-right": `${+d / 4}em`,
      }),
    ],
    [
      /^my([\.\d]+)$/,
      ([, d]) => ({
        "margin-top": `${+d / 4}em`,
        "margin-bottom": `${+d / 4}em`,
      }),
    ],
    [
      /^my-([\.\d]+)$/,
      ([, d]) => ({
        "margin-top": `${+d / 4}em`,
        "margin-bottom": `${+d / 4}em`,
      }),
    ],
    [/^p-([\.\d]+)$/, (match) => ({ padding: `${+match[1] / 4}em` })],
    [/^p([\.\d]+)$/, (match) => ({ padding: `${+match[1] / 4}em` })],
    [/^pt([\.\d]+)$/, (match) => ({ "padding-top": `${+match[1] / 4}em` })],
    [/^pb([\.\d]+)$/, (match) => ({ "padding-bottom": `${+match[1] / 4}em` })],
    [/^pt-([\.\d]+)$/, (match) => ({ "padding-top": `${+match[1] / 4}em` })],
    [/^pb-([\.\d]+)$/, (match) => ({ "padding-bottom": `${+match[1] / 4}em` })],
    [/^pl([\.\d]+)$/, (match) => ({ "padding-left": `${+match[1] / 4}em` })],
    [/^pr([\.\d]+)$/, (match) => ({ "padding-right": `${+match[1] / 4}em` })],
    [/^pl-([\.\d]+)$/, (match) => ({ "padding-left": `${+match[1] / 4}em` })],
    [/^pr-([\.\d]+)$/, (match) => ({ "padding-right": `${+match[1] / 4}em` })],
    [
      /^px([\.\d]+)$/,
      (match) => ({
        "padding-left": `${+match[1] / 4}em`,
        "padding-right": `${+match[1] / 4}em`,
      }),
    ],
    [
      /^px-([\.\d]+)$/,
      (match) => ({
        "padding-left": `${+match[1] / 4}em`,
        "padding-right": `${+match[1] / 4}em`,
      }),
    ],
    [
      /^py([\.\d]+)$/,
      (match) => ({
        "padding-top": `${+match[1] / 4}em`,
        "padding-bottom": `${+match[1] / 4}em`,
      }),
    ],
    [
      /^py-([\.\d]+)$/,
      (match) => ({
        "padding-top": `${+match[1] / 4}em`,
        "padding-bottom": `${+match[1] / 4}em`,
      }),
    ],
  ],
  theme: {
    fontFamily: {
      Alata: "Alata",
      JosefinSans: "JosefinSans",
    },
    fontSize: {
      body: "0.9375rem", //15px
    },
    colors: {
      White: "hsl(0, 0%, 100%)",
      Black: "hsl(0, 0%, 0%)",
      DarkGray: "hsl(0, 0%, 55%)",
      VeryDarkGray: "hsl(0, 0%, 41%)",
      CopyRight: "hsl(0,0%,78%)",
    },
    breakpoints: {
      xs: "280px",
      sm: "360px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1440px",
      "3xl": "1920px",
      "4xl": "2560px",
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

