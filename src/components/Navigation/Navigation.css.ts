import { style } from '@vanilla-extract/css'
import { theme } from '../../theme/theme.css'

export const navigationStyle = style({
  backgroundColor: theme.colors.background,
  color: theme.colors.normal,
  display: 'flex',
  flexGrow: '1',
  justifyContent: 'flex-end',
})

export const navListStyle = style({
  //overriding defaults
  padding: theme.space[0],
  margin: theme.space[0],
  listStyle: 'none',
  display: 'flex',
})

export const navListItemStyle = style({
  //overriding defaults
  padding: theme.space[0],
  margin: theme.space[0],
  listStyle: 'none',
  display: 'block',
  borderTop: `5px solid ${theme.colors.primary}`,
  '@media': {
    print: {
      borderTop: `5px solid ${theme.colors.black}`,
    },
  },
})

export const navLinkStyle = style({
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  height: '100%',
  padding: '0 3vw',
  textDecoration: 'none',
  color: theme.colors.normal,
  transition: 'color 200ms ease, background-color 200ms ease',
  ':focus': {
    outline: '2px solid highlight',
  },
  selectors: {
    ['&:focus-visible, &:hover']: {
      backgroundColor: theme.colors.secondary,
      color: theme.colors.inverse,
    },
  },
})

export const activeStyle = style({
  selectors: {
    ['&, &:hover']: {
      backgroundColor: theme.colors.primary,
      color: theme.colors.inverse,
    },
  },
})
