import {
  createGlobalTheme,
  createTheme,
  createThemeContract,
} from '@vanilla-extract/css';

export const theme = createGlobalTheme(':root', {
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
    // heading: 'Georgia, Times, Times New Roman, serif',
    heading: 'Goudy Old Style, Garamond, Big Caslon, Times New Roman, serif',
    // body: 'system-ui',
    body: 'Helvetica Neue, Helvetica, Arial, sans-serif',
  },
});

export const colors = createThemeContract({
  primary: null,
  secondary: null,
  background: null,
  text: {
    normal: null,
    white: null,
    black: null,
    disabled: null,
    inverse: null,
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
