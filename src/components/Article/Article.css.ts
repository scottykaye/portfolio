import { style } from '@vanilla-extract/css';
import { colors, theme } from '../../theme/theme.css';

export const articleStyle = style({
  backgroundColor: colors.background,
  color: colors.normal,
  padding: theme.space[200],
});
