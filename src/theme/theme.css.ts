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
    heading: 'Raleway, Helvetica Neue, Helvetica, sans-serif',
    // body: 'system-ui',
    body: 'Helvetica Neue, Helvetica, sans-serif',
  },
});

export const colors = createThemeContract({
  primary: '',
  secondary: '',
  tertiary: '',
  background: '',
  gray: '',
  normal: '',
  white: '',
  black: '',
  disabled: '',
  inverse: '',
  gradient: '',
});

export const lightTheme = createTheme(colors, {
  primary: '#968EA9',
  secondary: '#379AC8',
  tertiary: '#D94562',
  background: '#F0F9F9',
  gray: '#CCCCCC',
  normal: '#333333',
  white: '#FFFFFF',
  black: '#000000',
  disabled: '#555555',
  inverse: '#ffffff',
  gradient: ' #4158d0, #c850c0, #ffcc70',
});
//  I dig this purple but only 2.44 compliance color with white text #A9A3BD
export const darkTheme = createTheme(colors, {
  primary: '#F0FF00',
  secondary: '#30D4FD',
  tertiary: '#FD3075',
  background: '#111111',
  gray: '#555555',
  normal: '#FFFFFF',
  white: '#FFFFFF',
  black: '#000000',
  disabled: '#CCD6D9',
  inverse: '#000000',
  gradient: '#fbda61, #ff5acd',
});
