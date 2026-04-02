import { style } from '@vanilla-extract/css';
import { theme } from '../../theme/theme.css';

export const wrapperStyles = style({
  maxWidth: 1240,
  width: '100%',
  margin: 'auto',
  padding: `${theme.space[0]} ${theme.space[800]}`,
});
