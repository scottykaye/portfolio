import { style, keyframes } from '@vanilla-extract/css'
import { theme } from '../../theme/theme.css'

const animate = keyframes({
  '0%': {
    backgroundPosition: '0% 50%',
  },
  '50%': {
    backgroundPosition: '100% 50%',
  },
  '100%': {
    backgroundPosition: '0% 50%',
  },
})

const flex = style({
  display: 'flex',
})

export const footerStyle = style([
  flex,
  {
    backgroundColor: theme.colors.background,
    fontFamily: theme.fonts.body,
    color: theme.colors.normal,
    padding: `${theme.space[1000]} ${theme.space[0]}`,
    position: 'relative',
    marginBlockStart: theme.space[800],

    selectors: {
      '&::before, &::after': {
        content: '',
        position: 'absolute',
        left: 0,
        right: 0,
        height: 5,
        background: `linear-gradient(-45deg, ${theme.colors.secondary},${theme.colors.primary})`,
        backgroundSize: '400% 400%',

        '@media': {
          '(prefers-reduced-motion: no-preference)': {
            animation: `${animate} 5s linear infinite`,
          },
        },
      },

      '&::before': {
        top: 0,
        // display: 'none'
      },

      '&::after': {
        bottom: 0,
      },
    },

    '@media': {
      print: {
        display: 'none',
      },
    },
  },
])

export const footerInnerStyle = style([
  flex,
  {
    justifyContent: 'space-between',
  },
])

export const rightStyle = style([
  flex,
  {
    flexWrap: 'wrap',
    paddingInlineStart: theme.space[300],
    gap: theme.space[200],
    fill: theme.colors.primary,
  },
])
