import { styleVariants, createVar, fallbackVar } from '@vanilla-extract/css'
import { theme } from '../../theme/theme.css'

export const size = createVar()
export const margin = createVar()

export const headingStyle = styleVariants(
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
      fontFamily: theme.fonts.heading,
      fontSize: fallbackVar(size, '30px'),
      margin: fallbackVar(margin, '0'),
      display: 'flex',
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
