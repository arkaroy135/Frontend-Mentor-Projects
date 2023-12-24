import myConfig from "../uno/uno.config";

export default {
  ...myConfig,
  shortcuts: {},
  theme: {
    ...myConfig.theme,
    colors: {
      Yellow: "hsl(47, 88%, 63%)",
      White: "hsl(0, 0%, 100%)",
      Grey: "hsl(0, 0%, 50%)",
      Black: "hsl(0, 0%, 7%)",
    },
    fontFamily: {
      "Figtree-600": "Figtree-SemiBold",
      "Figtree-800": "Figtree-ExtraBold",
    },
    fontSize: {
      body: "1rem",
    },
  },
};
