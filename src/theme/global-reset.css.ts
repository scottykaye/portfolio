import {
  globalStyle,
} from '@vanilla-extract/css';
import { theme } from './theme.css';

globalStyle(':root', {
  minHeight: '100%',
  height: '100%',
  backgroundColor: theme.colors.background,
  color: theme.colors.normal,
  fontFamily: theme.fonts.body,
});

globalStyle('html, body, #__next', {
  display: 'contents',

});

globalStyle(' .light, .dark', {
  minHeight: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
});

globalStyle('.light, .dark, input[type="checkbox" i], ul, li h1, h2, h3, h4, h5, h6', {
  margin: 0,
});

globalStyle('.light, .dark, li ', {
  padding: 0,
});

globalStyle('*', {
  boxSizing: 'border-box',
});
