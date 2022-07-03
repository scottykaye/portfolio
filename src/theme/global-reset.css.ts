import {
  globalStyle,
} from '@vanilla-extract/css';
import { colors } from './theme.css';

globalStyle('html, body, #__next', {
  margin: 0,
  padding: 0,
  minHeight: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  flexGrow: 1,
  backgroundColor: colors.background,
  //  figure out perfers color scheme
  // '@media': {
  //   '(prefers-color-scheme: light)': {
  //     background: '#EBF7FA',
  //   },
  //   '(prefers-color-scheme: dark)': {
  //     background: '#170038',
  //   },
  // },
});

globalStyle('input[type="checkbox" i], ul, li', {
  margin: 0,
});
globalStyle('li ', {
  padding: 0,
});
globalStyle('*', {
  boxSizing: 'border-box',
});
