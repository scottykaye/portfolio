import { style } from '@vanilla-extract/css';
import { theme } from '../../theme/theme.css';

export const article = style({
  backgroundColor: theme.colors.background,
  color: theme.colors.normal,
  padding: theme.space[200],
});

export const heading = style({
  fontSize: 24,
  fontFamily: theme.fonts.heading,
  fontWeight: 'bold',
  color: theme.colors.primary,
});
