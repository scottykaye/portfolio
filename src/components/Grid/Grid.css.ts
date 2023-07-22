import { style } from "@vanilla-extract/css";
import { theme } from "../../theme/theme.css";

export const grid = style({
  display: "grid",
  gap: theme.space[500],
});
