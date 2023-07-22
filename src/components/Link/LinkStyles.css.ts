import { style } from "@vanilla-extract/css";
import { theme } from "../../theme/theme.css";
import { NodeNextRequest } from "next/dist/server/base-http/node";

export const linkStyles = style({
  color: theme.colors.primary,

  "@media": {
    print: {
      color: theme.colors.black,
    },
  },

  textDecorationSkipInk: "auto",
  ":hover": {
    color: theme.colors.secondary,
    transition: " color 200ms linear",
  },
});
