import { globalStyle } from '@vanilla-extract/css'
import { theme } from './theme.css'

globalStyle(':root', {
  padding: 0,
  minHeight: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: theme.colors.background,
  color: theme.colors.normal,
  fontFamily: theme.fonts.body,
  lineHeight: 1.5,
})

globalStyle('html, body, #__next', {
  display: 'contents',
})

globalStyle('html', {
  overflowY: 'scroll',
})

globalStyle(':root, input[type="checkbox"], li, h1, h2, h3, h4, h5, h6', {
  margin: 0,
})

globalStyle('ul', {
  margin: '10px 0',
  paddingInlineStart: 15,
  listStyleType: 'disc',
})

globalStyle('li', {
  paddingInlineStart: 5,
  marginBlockStart: 5,

  // Probably need a list component since psuedos are not valid in globalStyle functions
  // '::before': {
  //   content: '\2022',
  //   color: theme.colors.primary,
  //   fontWeight: 'bold',
  //   display: 'inline-block',
  //   width: '1em',
  //   marginInlineStart: '-1em',
  // }
})

globalStyle('*', {
  boxSizing: 'border-box',
})
