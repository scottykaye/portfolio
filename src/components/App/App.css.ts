import { style } from '@vanilla-extract/css';
import { theme } from '../../theme/theme.css';

export const app = style({
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100%',
  padding: theme.space[1000],
});

export const logoBGColor = style({ fill: theme.colors.normal });
export const logoFillColor = style({ fill: theme.colors.inverse });
