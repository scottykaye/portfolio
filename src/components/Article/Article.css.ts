import { style } from '@vanilla-extract/css';
import { theme } from '../../theme/theme.css';

export const articleStyle = style({
  backgroundColor: theme.colors.background,
  color: theme.colors.normal,
  padding: theme.space[200],
});
