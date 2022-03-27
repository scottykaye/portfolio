import {style} from '@vanilla-extract/css';
import {theme} from './../../theme.css';

export const MainContentStyle = style({
  backgroundColor: theme.colors.background,
  fontFamily: theme.fonts.body,
  color: theme.colors.text.normal,
  padding: 10,
  flexGrow: 1,
  display: 'grid',
});
