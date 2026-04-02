import { style } from '@vanilla-extract/css'
import { theme } from '../../theme/theme.css'

export const link = style({
  color: theme.colors.primary,

  '@media': {
    print: {
      color: theme.colors.black,
    },
  },

  textDecorationSkipInk: 'auto',
  ':hover': {
    color: theme.colors.secondary,
    transition: ' color 200ms linear',
  },
})
