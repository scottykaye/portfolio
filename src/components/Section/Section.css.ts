import { style, styleVariants } from "@vanilla-extract/css";
import { theme } from "../../theme/theme.css";

export const section = style({
  border: `2px solid ${theme.colors.primary}`,
  "@media": {
    print: {
      border: `2px solid ${theme.colors.black}`,
    },
  },
  padding: theme.space[400],
  position: "relative",
  marginBlock: theme.space[400],
});

export const heading = style({
  position: "absolute",
  insetBlockStart: "-1rem",
  background: theme.colors.background,
  padding: `${theme.space[100]} ${theme.space[200]}`,
});
