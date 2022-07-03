import { style } from '@vanilla-extract/css';
import { colors } from '../../theme/theme.css';

export const appStyles = style({
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100%',
});

export const logoBGColor = style({ fill: colors.normal });
export const logoFillColor = style({ fill: colors.inverse });
