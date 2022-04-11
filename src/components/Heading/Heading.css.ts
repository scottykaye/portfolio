import { style } from '@vanilla-extract/css';
import { theme, colors } from '../../theme/theme.css';

export const headingStyle = style({
  backgroundColor: colors.background,
  fontFamily: theme.fonts.heading,
  fontSize: 32,
  color: colors.text.normal,
  padding: `${theme.space[200]} 0${theme.space[400]}`,
  display: 'flex',
  alignItems: 'center',
});
