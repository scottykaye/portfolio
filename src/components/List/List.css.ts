import {
  style,
  styleVariants,
  fallbackVar,
  createVar,
} from '@vanilla-extract/css'
import { theme } from '../../theme/theme.css'

export const margin = createVar()

export const list = styleVariants(
  {
    default: {},
    none: { listStyle: 'none' },
  },
  (listStyle) => [
    listStyle,
    {
      '@media': {
        print: {
          margin: theme.space[50],

          color: theme.colors.gray,
        },
      },
    },
  ],
)

export const listItem = style({
  margin: fallbackVar(margin, `${theme.space[200]} ${theme.space[0]}`),

  '@media': {
    print: {
      margin: theme.space[0],
      fontSize: 11,
      lineHeight: 1.3,
    },
  },

  selectors: {
    '& &': {
      margin: theme.space[0],
    },
  },
})
