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

export const flex = style({
  display: 'flex',
})

export const headerStyle = style({
  backgroundColor: theme.colors.background,
  fontFamily: theme.fonts.body,
  color: theme.colors.normal,

  position: 'relative',
  justifyContent: 'space-between',

  selectors: {
    '&::before': {
      content: '',
      display: 'block',
      width: '100%',
      height: 5,
      marginBottom: theme.space[300],
      background: `linear-gradient(-45deg, ${theme.colors.secondary},${theme.colors.primary})`,
      backgroundSize: '400% 400%',

      '@media': {
        '(prefers-reduced-motion: no-preference)': {
          animation: `${animate} 5s linear infinite`,
        },
      },
    },
  },
})

export const innerHeaderStyle = style([
  flex,
  { justifyContent: 'space-between' },
])
