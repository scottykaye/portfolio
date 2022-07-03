import { style } from '@vanilla-extract/css';
import { theme, colors } from '../../theme/theme.css';

export const mainContentStyle = style({
  backgroundColor: colors.background,
  fontFamily: theme.fonts.body,
  color: colors.normal,
  flexGrow: 1,
  // Doing padding on main since issues with the theme on body and html reset
  paddingTop: theme.space[500],
  paddingBottom: theme.space[1000],
});
