import { styleVariants, createVar, fallbackVar } from "@vanilla-extract/css";
import { theme } from "../../theme/theme.css";

export const size = createVar();

export const headingStyle = styleVariants(
  {
    default: {},
    primary: {
      color: theme.colors.primary,

      "@media": {
        print: {
          color: theme.colors.black,
        },
      },
    },
  },
  (color) => [
    color,
    {
      fontFamily: theme.fonts.heading,
      fontSize: fallbackVar(size, "30px"),
      display: "flex",
      alignItems: "center",
    },
  ]
);
