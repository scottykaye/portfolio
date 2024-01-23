import { style, keyframes, globalStyle } from '@vanilla-extract/css'
import { theme } from '../../theme/theme.css'

export const card = style({
  position: 'relative',
  display: 'block',
  border: '2px solid',
  borderColor: theme.colors.primary,

  color: theme.colors.normal,
  padding: theme.space[300],
  marginBlock: theme.space[800],
  cursor: 'pointer',
  textDecoration: 'none',
  transition: 'translate 100ms ease, border-color 100ms ease',
  selectors: {
    '&:focus, &:hover': {
      borderColor: theme.colors.secondary,
    },
  },

  '@media': {
    '(prefers-reduced-motion: no-preference)': {
      selectors: {
        '&:hover, &:focus-visible': {
          translate: `0 ${theme.space[200]}`,
        },
        '&:focus-visible': {
          translate: `0 ${theme.space[200]}`,
          outline: '2px solid highlight',
          outlineOffset: theme.space[100],
        },

        '&:active': {
          translate: 0,
        },
      },
    },
  },

  '@container': {
    // 80px, is 40 padding both sides plus 300 minmax size
    'home (min-width: 380px)': {
      selectors: {
        '&:nth-child(2n)': {
          // @todo consider a staggered look
          // marginBlock: `${theme.space[1000]} ${theme.space[800]}`,
        },
      },
    },
  },
})
