import {style} from '@vanilla-extract/css';
import {theme} from './../../theme.css';

export const HeaderStyle = style({
  backgroundColor: theme.colors.background,
  fontFamily: theme.fonts.body,
  color: theme.colors.text.normal,
  padding: 10,
});
