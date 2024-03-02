import {
  styleVariants,
  style,
  createVar,
  fallbackVar,
} from '@vanilla-extract/css'
import { theme } from '../../theme/theme.css'

export const size = createVar()
export const margin = createVar()

export const heading = styleVariants(
  {
    default: {},
    primary: {
      color: theme.colors.primary,

      '@media': {
        print: {
          color: theme.colors.black,
        },
      },
    },
  },
  (color) => [
    color,
    {
      fontSize: fallbackVar(size, '30px'),
      margin: fallbackVar(margin, '0'),
      alignItems: 'center',
      '@media': {
        print: {
          fontSize: 12,
          lineHeight: 1.3,
          color: theme.colors.gray,
        },
      },
    },
  ],
)

export const font = style({
  fontFamily: theme.fonts.heading,
})
