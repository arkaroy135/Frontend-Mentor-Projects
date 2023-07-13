// uno.config.ts
import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetTagify,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
} from "unocss";

export default defineConfig({
  theme: {
    fontFamily: {
      RR: "Roboto-Regular",
      RB: "Roboto-Bold",
    },
    fontSize: {
      para: "1rem",
    },
    colors: {
      Tomato: 'hsl(4,100%,67%)',
      DarkSlateGrey: 'hsl(234,29%,20%)',
      CharcoalGrey: 'hsl(235,18%,26%)',
      Grey: 'hsl(231,7%,60%)',
      White: 'hsl(0,0%,100%)',
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
  rules: [
    [/^mbs([\.\d]+)$/, ([, d]) => ({ "margin-block-start": `${+d / 4}em` })],
    [/^mbs-([\.\d]+)$/, ([, d]) => ({ "margin-block-start": `${+d / 4}em` })],
    [/^mbs--([\.\d]+)$/, ([, d]) => ({ "margin-block-start": `-${+d / 4}em` })],
    [/^mbs$/, () => ({ "margin-block-start": `1em` })],
    [/^mbs-$/, () => ({ "margin-block-start": `-1em` })],
    [/^ms([\.\d]+)$/, ([, d]) => ({ "margin-inline-start": `${+d / 4}em` })],
    [/^ms$/, () => ({ "margin-inline-start": `1em` })],
    [/^ms-$/, () => ({ "margin-inline-start": `-1em` })],
    [/^ms-([\.\d]+)$/, ([, d]) => ({ "margin-inline-start": `${+d / 4}em` })],
    [/^ms--([\.\d]+)$/, ([, d]) => ({ "margin-inline-start": `-${+d / 4}em` })],
    [/^mbe([\.\d]+)$/, ([, d]) => ({ "margin-block-end": `${+d / 4}em` })],
    [/^mbe$/, () => ({ "margin-block-end": `1em` })],
    [/^mbe-$/, () => ({ "margin-block-end": `-1em` })],
    [/^mbe-([\.\d]+)$/, ([, d]) => ({ "margin-block-end": `${+d / 4}em` })],
    [/^mbe--([\.\d]+)$/, ([, d]) => ({ "margin-block-end": `-${+d / 4}em` })],
    [/^me([\.\d]+)$/, ([, d]) => ({ "margin-inline-end": `${+d / 4}em` })],
    [/^me$/, () => ({ "margin-inline-end": `1em` })],
    [/^me-$/, () => ({ "margin-inline-end": `-1em` })],
    [/^me-([\.\d]+)$/, ([, d]) => ({ "margin-inline-end": `${+d / 4}em` })],
    [/^me--([\.\d]+)$/, ([, d]) => ({ "margin-inline-end": `-${+d / 4}em` })],
    [/^m([\.\d]+)$/, ([, d]) => ({ margin: `${+d / 4}em` })],
    [/^m$/, () => ({ margin: `1em` })],
    [/^m-$/, () => ({ margin: `-1em` })],
    [/^m-([\.\d]+)$/, ([, d]) => ({ margin: `${+d / 4}em` })],
    [/^m--([\.\d]+)$/, ([, d]) => ({ margin: `-${+d / 4}em` })],
    [/^mt([\.\d]+)$/, ([, d]) => ({ "margin-top": `${+d / 4}em` })],
    [/^mt$/, () => ({ "margin-top": `1em` })],
    [/^mt-$/, () => ({ "margin-top": `-1em` })],
    [/^mt-([\.\d]+)$/, ([, d]) => ({ "margin-top": `${+d / 4}em` })],
    [/^mt--([\.\d]+)$/, ([, d]) => ({ "margin-top": `-${+d / 4}em` })],
    [/^mb([\.\d]+)$/, ([, d]) => ({ "margin-bottom": `${+d / 4}em` })],
    [/^mb$/, () => ({ "margin-bottom": `1em` })],
    [/^mb-$/, () => ({ "margin-bottom": `-1em` })],
    [/^mb-([\.\d]+)$/, ([, d]) => ({ "margin-bottom": `${+d / 4}em` })],
    [/^mb--([\.\d]+)$/, ([, d]) => ({ "margin-bottom": `-${+d / 4}em` })],
    [/^ml([\.\d]+)$/, ([, d]) => ({ "margin-left": `${+d / 4}em` })],
    [/^ml$/, () => ({ "margin-left": `1em` })],
    [/^ml-$/, () => ({ "margin-left": `-1em` })],
    [/^ml-([\.\d]+)$/, ([, d]) => ({ "margin-left": `${+d / 4}em` })],
    [/^ml--([\.\d]+)$/, ([, d]) => ({ "margin-left": `-${+d / 4}em` })],
    [/^mr([\.\d]+)$/, ([, d]) => ({ "margin-right": `${+d / 4}em` })],
    [/^mr-([\.\d]+)$/, ([, d]) => ({ "margin-right": `${+d / 4}em` })],
    [/^mr--([\.\d]+)$/, ([, d]) => ({ "margin-right": `-${+d / 4}em` })],
    [/^mr$/, () => ({ "margin-right": `1em` })],
    [/^mr-$/, () => ({ "margin-right": `-1em` })],
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
      /^mx$/, () => ({
        "margin-left": `1em`,
        "margin-right": `1em`,
      }),
    ],
    [
      /^mx-$/, () => ({
        "margin-left": `-1em`,
        "margin-right": `-1em`,
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
      /^my$/, () => ({
        "margin-top": `1em`,
        "margin-bottom": `1em`,
      }),
    ],
    [
      /^my-$/, () => ({
        "margin-top": `-1em`,
        "margin-bottom": `-1em`,
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
    [/^pbs$/, () => ({ "padding-block-start": `1em` }),],
    [/^pbs-$/, () => ({ "padding-block-start": `-1em` }),],
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
    [/^pbe$/, () => ({ "padding-block-end": `1em` }),],
    [/^pbe-$/, () => ({ "padding-block-end": `-1em` }),],
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
    [/^pe$/, () => ({ "padding-inline-end": `1em` }),],
    [/^pe-$/, () => ({ "padding-inline-end": `-1em` }),],
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
    [/^ps$/, () => ({ "padding-inline-start": `1em` }),],
    [/^ps-$/, () => ({ "padding-inline-start": `-1em` }),],
    [
      /^ps-([\.\d]+)$/,
      (match) => ({ "padding-inline-start": `${+match[1] / 4}em` }),
    ],
    [
      /^ps--([\.\d]+)$/,
      (match) => ({ "padding-inline-start": `-${+match[1] / 4}em` }),
    ],
    [/^p-([\.\d]+)$/, (match) => ({ padding: `${+match[1] / 4}em` })],
    [/^p$/, () => ({ padding: `1em` })],
    [/^p-$/, () => ({ padding: `-1em` })],
    [/^p([\.\d]+)$/, (match) => ({ padding: `${+match[1] / 4}em` })],
    [/^p--([\.\d]+)$/, (match) => ({ padding: `-${+match[1] / 4}em` })],
    [/^pt([\.\d]+)$/, (match) => ({ "padding-top": `${+match[1] / 4}em` })],
    [/^pt$/, () => ({ "padding-top": `1em` })],
    [/^pt-$/, () => ({ "padding-top": `-1em` })],
    [/^pt-([\.\d]+)$/, (match) => ({ "padding-top": `${+match[1] / 4}em` })],
    [/^pt--([\.\d]+)$/, (match) => ({ "padding-top": `-${+match[1] / 4}em` })],
    [/^pb([\.\d]+)$/, (match) => ({ "padding-bottom": `${+match[1] / 4}em` })],
    [/^pb$/, () => ({ "padding-bottom": `1em` })],
    [/^pb-$/, () => ({ "padding-bottom": `-1em` })],
    [/^pb-([\.\d]+)$/, (match) => ({ "padding-bottom": `${+match[1] / 4}em` })],
    [
      /^pb--([\.\d]+)$/,
      (match) => ({ "padding-bottom": `-${+match[1] / 4}em` }),
    ],
    [/^pl([\.\d]+)$/, (match) => ({ "padding-left": `${+match[1] / 4}em` })],
    [/^pl$/, () => ({ "padding-left": `1em` })],
    [/^pl-$/, () => ({ "padding-left": `-1em` })],
    [/^pl-([\.\d]+)$/, (match) => ({ "padding-left": `${+match[1] / 4}em` })],
    [/^pl--([\.\d]+)$/, (match) => ({ "padding-left": `-${+match[1] / 4}em` })],
    [/^pr([\.\d]+)$/, (match) => ({ "padding-right": `${+match[1] / 4}em` })],
    [/^pr$/, () => ({ "padding-right": `1em` })],
    [/^pr-$/, () => ({ "padding-right": `-1em` })],
    [/^pr-([\.\d]+)$/, (match) => ({ "padding-right": `${+match[1] / 4}em` })],
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
      /^px$/, () => ({
        "padding-left": `1em`,
        "padding-right": `1em`,
      }),
    ],
    [
      /^px-$/, () => ({
        "padding-left": `-1em`,
        "padding-right": `-1em`,
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
      /^py$/, () => ({
        "padding-top": `1em`,
        "padding-bottom": `1em`,
      }),
    ],
    [
      /^py-$/, () => ({
        "padding-top": `-1em`,
        "padding-bottom": `-1em`,
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
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons(),
    presetTypography(),
    presetTagify(),
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
});
