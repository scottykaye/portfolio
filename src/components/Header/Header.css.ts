import {style} from '@vanilla-extract/css';
import {theme} from './../../theme/theme.css';

export const headerStyle = style({
  backgroundColor: theme.colors.background,
  fontFamily: theme.fonts.body,
  color: theme.colors.text.normal,
  padding: 10,
  display: 'flex',
  alignItems: 'center',
});

export const rightStyle = style({
  marginLeft: 'auto',
  padding: 10,
  display: 'flex',
  alignItems: 'center',
});
