import { style } from "@vanilla-extract/css";
import { theme } from "../../theme/theme.css";

export const listItem = style({
  margin: `${theme.space[200]} ${theme.space[0]} `,

  selectors: {
    "& &": {
      margin: `${theme.space[50]} ${theme.space[0]} `,
    },
  },
});

export const list = style({
  margin: `${theme.space[100]} ${theme.space[0]} `,
});
