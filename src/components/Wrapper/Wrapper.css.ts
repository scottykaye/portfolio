import { style, createVar, fallbackVar } from '@vanilla-extract/css';
import { theme, colors } from '../../theme/theme.css';

export const wrapperStyles = style({
  maxWidth: 1240,
  width: '100%',
  margin: 'auto',
  padding: `0 ${theme.space[800]}`,
  boxSizing: 'border-box',
});
