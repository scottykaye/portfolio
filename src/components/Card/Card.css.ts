import { style, keyframes, globalStyle } from '@vanilla-extract/css'
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

export const card = style({
  position: 'relative',
  display: 'block',
  outline: '2px solid',
  outlineColor: theme.colors.primary,
  color: theme.colors.normal,
  padding: theme.space[300],
  marginBlock: theme.space[800],
  cursor: 'pointer',
  textDecoration: 'none',
  // '::before': {
  //   content: '',
  //   position: 'absolute',
  //   top: 0,
  //   left: 0,
  //   width: '100%',
  //   height: '100%',
  //   backgroundColor: theme.colors.background,
  //   clipPath: 'polygon(0% 0%, 100% 0%, 100% 90%, 0% 90%)',
  //   zIndex: '1',
  // },
  selectors: {
    '&:focus, &:hover': {
      outlineColor: theme.colors.secondary,
    },
  },

  '@media': {
    '(prefers-reduced-motion: no-preference)': {
      animation: `${animate} 14s linear infinite`,
    },
  },
})

// Oh boy
globalStyle(`${card} > article > header`, {
  position: 'absolute',
  top: 0,
  transform: ' translateY(-50%)',
  left: '10px',
  clip: 'rect(255,255,255,255)',
  backgroundColor: theme.colors.background,
  paddingInline: theme.space[200],
})

// export const image = style({
//   maxWidth: '100%',
//   maxHeight: '100%',
// });
