import { createGlobalTheme, createThemeContract } from '@vanilla-extract/css'

export const theme = createThemeContract({
  space: {
    0: '',
    100: '',
    200: '',
    300: '',
    400: '',
    500: '',
    600: '',
    700: '',
    800: '',
    900: '',
    1000: '',
  },
  fonts: {
    heading: '',
    body: '',
  },
  colors: {
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
  },
})

const lightTheme = {
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
  colors: {
    // primary: '#968EA9',
    // primary: '#cbc3e3',
    // primary: '#747082',
    primary: '#4A4773',
    //   #6A688F
    // secondary: '#379AC8',
    secondary: '#26728A',
    tertiary: '#D94562',
    background: '#F0F9F9',
    gray: '#CCCCCC',
    normal: '#333333',
    white: '#FFFFFF',
    black: '#000000',
    disabled: '#555555',
    inverse: '#ffffff',
    // gradient: ' #4158d0, #c850c0, #ffcc70',
    gradient: ' #4158d0, #c850c0, #ffcc70',
  },
}

// #393d00 #121a26 #211a28
// #24253d #222243
// #7a6d7a
// #fad961 #ffeb27 #ffcc00 #f0e68c
// #fd3075

const darkTheme = {
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
    // heading: 'Raleway, Helvetica Neue, Helvetica, sans-serif',
    heading: 'var(--font-raleway)',
    // body: 'system-ui',
    body: 'Helvetica Neue, Helvetica, sans-serif',
  },
  colors: {
    //  primary: '#f0ff00',
    primary: '#ffeb20',
    secondary: '#30d4fd',
    tertiary: '#fd3075',
    //  background: '#111111',
    background: '#24253d',
    gray: '#555555',
    normal: '#ffffff',
    white: '#ffffff',
    black: '#000000',
    disabled: '#ccd6d9',
    inverse: '#000000',
    gradient: '#fbda61, #ff5acd',
  },
}

createGlobalTheme(':root, .light', theme, lightTheme)
createGlobalTheme(':root, .dark', theme, darkTheme)
