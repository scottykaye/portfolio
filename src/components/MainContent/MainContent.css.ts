import { style } from '@vanilla-extract/css';
import { theme } from '../../theme/theme.css';

export const mainContentStyle = style({
  backgroundColor: theme.colors.background,
  fontFamily: theme.fonts.body,
<<<<<<< HEAD
  color: theme.colors.normal,
=======
  color: colors.normal,
>>>>>>> f42bbff97e8bf99bd30ed198472452669f38ca53
  flexGrow: 1,
  // Doing padding on main since issues with the theme on body and html reset
  paddingTop: theme.space[500],
  paddingBottom: theme.space[1000],
});
