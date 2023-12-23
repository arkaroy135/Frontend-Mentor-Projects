import una from "@una-ui/nuxt/una.config";
import myConfig from "../uno/uno.config";

export default {
  ...myConfig,
  shortcuts: {},
  theme: {
    ...myConfig.theme,
    colors: {
      lightPink: "hsl(275,100%,97%)",
      grayishPurple: "hsl(292,16%,49%)",
      darkPurple: "hsl(292,42%,14%)",
      hoverColor: "hsl(281, 83%, 54%)",
    },
    fontFamily: {
      WorkSans: "WorkSans",
    },
    fontSize: {
      body: "1rem",
    },
  },
  ...una(),
};
