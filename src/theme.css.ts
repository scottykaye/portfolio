import {
  createGlobalTheme,
  createTheme,
  createThemeContract,
  globalStyle,
} from '@vanilla-extract/css';
import {light} from './hooks';

const root = createGlobalTheme('.App', {
  space: {
    0: '0px',
    100: '5px',
    200: '10px',
    300: '15px',
    400: '20px',
    500: '25px',
    600: '30px',
    700: '35px',
    800: '40px',
    900: '45px',
    1000: '50px',
  },
  fonts: {
    heading: 'Georgia, Times, Times New Roman, serif',
    body: 'system-ui',
  },
});

// We could just grab an array from the first theme to get a contract instead of doing this

// export const [themeClass, themeVars] = createTheme({
//   color: {
//     brand: 'blue',
//   },
//   font: {
//     body: 'arial',
//   },
// });

const colors = createThemeContract({
  primary: '',
  secondary: '',
  background: '',
  text: {
    normal: '',
    white: '',
    black: '',
    disabled: '',
    inverse: '',
  },
});

export const lightTheme = createTheme(colors, {
  primary: '#1F004A',
  secondary: '#8C0613',
  background: '#EBF7FA',
  text: {
    normal: '#333333',
    white: '#FFFFFF',
    black: '#000000',
    disabled: '#555555',
    inverse: '#ffffff',
  },
});

export const darkTheme = createTheme(colors, {
  primary: '#82FFF9',
  secondary: '#FF7680',
  background: '#170038',
  text: {
    normal: '#E2FFCA',
    white: '#FFFFFF',
    black: '#000000',
    disabled: '#CCD6D9',
    inverse: '#000000',
  },
});

export const theme = {...root, colors};

// Global styles
// don't love the next id we need height: 100% for it
globalStyle('html, body, .App, #__next', {
  margin: 0,
  padding: 0,
  minHeight: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  flexGrow: 1,

  '@media': {
    '(prefers-color-scheme: light)': {
      background: '#EBF7FA',
    },
    '(prefers-color-scheme: dark)': {
      background: '#170038',
    },
  },
});
