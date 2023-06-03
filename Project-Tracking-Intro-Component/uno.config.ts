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
  rules: [
    [/^mbs([\.\d]+)$/, ([, d]) => ({ "margin-block-start": `${+d / 4}em` })],
    [/^mbs-([\.\d]+)$/, ([, d]) => ({ "margin-block-start": `${+d / 4}em` })],
    [/^mbs--([\.\d]+)$/, ([, d]) => ({ "margin-block-start": `-${+d / 4}em` })],
    [/^ms([\.\d]+)$/, ([, d]) => ({ "margin-inline-start": `${+d / 4}em` })],
    [/^ms-([\.\d]+)$/, ([, d]) => ({ "margin-inline-start": `${+d / 4}em` })],
    [/^ms--([\.\d]+)$/, ([, d]) => ({ "margin-inline-start": `-${+d / 4}em` })],
    [/^mbe([\.\d]+)$/, ([, d]) => ({ "margin-block-end": `${+d / 4}em` })],
    [/^mbe-([\.\d]+)$/, ([, d]) => ({ "margin-block-end": `${+d / 4}em` })],
    [/^mbe--([\.\d]+)$/, ([, d]) => ({ "margin-block-end": `-${+d / 4}em` })],
    [/^me([\.\d]+)$/, ([, d]) => ({ "margin-inline-end": `${+d / 4}em` })],
    [/^me-([\.\d]+)$/, ([, d]) => ({ "margin-inline-end": `${+d / 4}em` })],
    [/^me--([\.\d]+)$/, ([, d]) => ({ "margin-inline-end": `-${+d / 4}em` })],
    [/^m([\.\d]+)$/, ([, d]) => ({ margin: `${+d / 4}em` })],
    [/^m-([\.\d]+)$/, ([, d]) => ({ margin: `${+d / 4}em` })],
    [/^m--([\.\d]+)$/, ([, d]) => ({ margin: `-${+d / 4}em` })],
    [/^mt([\.\d]+)$/, ([, d]) => ({ "margin-top": `${+d / 4}em` })],
    [/^mb([\.\d]+)$/, ([, d]) => ({ "margin-bottom": `${+d / 4}em` })],
    [/^mt-([\.\d]+)$/, ([, d]) => ({ "margin-top": `${+d / 4}em` })],
    [/^mb-([\.\d]+)$/, ([, d]) => ({ "margin-bottom": `${+d / 4}em` })],
    [/^mt--([\.\d]+)$/, ([, d]) => ({ "margin-top": `-${+d / 4}em` })],
    [/^mb--([\.\d]+)$/, ([, d]) => ({ "margin-bottom": `-${+d / 4}em` })],
    [/^ml([\.\d]+)$/, ([, d]) => ({ "margin-left": `${+d / 4}em` })],
    [/^mr([\.\d]+)$/, ([, d]) => ({ "margin-right": `${+d / 4}em` })],
    [/^ml-([\.\d]+)$/, ([, d]) => ({ "margin-left": `${+d / 4}em` })],
    [/^mr-([\.\d]+)$/, ([, d]) => ({ "margin-right": `${+d / 4}em` })],
    [/^ml--([\.\d]+)$/, ([, d]) => ({ "margin-left": `-${+d / 4}em` })],
    [/^mr--([\.\d]+)$/, ([, d]) => ({ "margin-right": `-${+d / 4}em` })],
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
      /^mx--([\.\d]+)$/,
      ([, d]) => ({
        "margin-left": `-${+d / 4}em`,
        "margin-right": `-${+d / 4}em`,
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
    [
      /^my--([\.\d]+)$/,
      ([, d]) => ({
        "margin-top": `-${+d / 4}em`,
        "margin-bottom": `-${+d / 4}em`,
      }),
    ],
    [
      /^pbs([\.\d]+)$/,
      (match) => ({ "padding-block-start": `${+match[1] / 4}em` }),
    ],
    [
      /^pbs-([\.\d]+)$/,
      (match) => ({ "padding-block-start": `${+match[1] / 4}em` }),
    ],
    [
      /^pbs--([\.\d]+)$/,
      (match) => ({ "padding-block-start": `-${+match[1] / 4}em` }),
    ],
    [
      /^pbe([\.\d]+)$/,
      (match) => ({ "padding-block-end": `${+match[1] / 4}em` }),
    ],
    [
      /^pbe-([\.\d]+)$/,
      (match) => ({ "padding-block-end": `${+match[1] / 4}em` }),
    ],
    [
      /^pbe--([\.\d]+)$/,
      (match) => ({ "padding-block-end": `-${+match[1] / 4}em` }),
    ],
    [
      /^pe([\.\d]+)$/,
      (match) => ({ "padding-inline-end": `${+match[1] / 4}em` }),
    ],
    [
      /^pe-([\.\d]+)$/,
      (match) => ({ "padding-inline-end": `${+match[1] / 4}em` }),
    ],
    [
      /^pe--([\.\d]+)$/,
      (match) => ({ "padding-inline-end": `-${+match[1] / 4}em` }),
    ],
    [
      /^ps([\.\d]+)$/,
      (match) => ({ "padding-inline-start": `${+match[1] / 4}em` }),
    ],
    [
      /^ps-([\.\d]+)$/,
      (match) => ({ "padding-inline-start": `${+match[1] / 4}em` }),
    ],
    [
      /^ps--([\.\d]+)$/,
      (match) => ({ "padding-inline-start": `-${+match[1] / 4}em` }),
    ],
    [/^p-([\.\d]+)$/, (match) => ({ padding: `${+match[1] / 4}em` })],
    [/^p([\.\d]+)$/, (match) => ({ padding: `${+match[1] / 4}em` })],
    [/^p--([\.\d]+)$/, (match) => ({ padding: `-${+match[1] / 4}em` })],
    [/^pt([\.\d]+)$/, (match) => ({ "padding-top": `${+match[1] / 4}em` })],
    [/^pb([\.\d]+)$/, (match) => ({ "padding-bottom": `${+match[1] / 4}em` })],
    [/^pt-([\.\d]+)$/, (match) => ({ "padding-top": `${+match[1] / 4}em` })],
    [/^pb-([\.\d]+)$/, (match) => ({ "padding-bottom": `${+match[1] / 4}em` })],
    [/^pt--([\.\d]+)$/, (match) => ({ "padding-top": `-${+match[1] / 4}em` })],
    [
      /^pb--([\.\d]+)$/,
      (match) => ({ "padding-bottom": `-${+match[1] / 4}em` }),
    ],
    [/^pl([\.\d]+)$/, (match) => ({ "padding-left": `${+match[1] / 4}em` })],
    [/^pr([\.\d]+)$/, (match) => ({ "padding-right": `${+match[1] / 4}em` })],
    [/^pl-([\.\d]+)$/, (match) => ({ "padding-left": `${+match[1] / 4}em` })],
    [/^pr-([\.\d]+)$/, (match) => ({ "padding-right": `${+match[1] / 4}em` })],
    [/^pl--([\.\d]+)$/, (match) => ({ "padding-left": `-${+match[1] / 4}em` })],
    [
      /^pr--([\.\d]+)$/,
      (match) => ({ "padding-right": `-${+match[1] / 4}em` }),
    ],
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
      /^px--([\.\d]+)$/,
      (match) => ({
        "padding-left": `-${+match[1] / 4}em`,
        "padding-right": `-${+match[1] / 4}em`,
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
    [
      /^py--([\.\d]+)$/,
      (match) => ({
        "padding-top": `-${+match[1] / 4}em`,
        "padding-bottom": `-${+match[1] / 4}em`,
      }),
    ],
  ],
  theme: {
    fontFamily: {
      Barlow: "Barlow", //Body
      BarlowCondensed: "BarlowCondensed", //Headings, Call-to-actions, Navigation
      BarlowCondensedBold: "BarlowCondensedBold", //Headings, Call-to-actions, Navigation
    },
    fontSize: {
      body: "1.125rem", //18px
    },
    colors: {
      Red: "hsl(0, 100%, 68%)",
      VeryDarkBlue: "hsl(230, 29%, 20%)",
      DarkGrayishBlue: "hsl(230, 11%, 40%)",
      GrayishBlue: "hsl(231, 7%, 65%)",
      LightGrayishBlue: "hsl(207, 33%, 95%)",
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

