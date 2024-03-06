import { style } from '@vanilla-extract/css'
import { theme } from '../../theme/theme.css'

export const section = style({
  position: 'relative',
  border: `2px solid ${theme.colors.primary}`,
  borderBlockStart: 0,
  marginBlock: theme.space[400],
  '@media': {
    print: {
      borderColor: theme.colors.black,
    },
  },
})

export const headingContainer = style({
  position: 'absolute',
  overflow: 'clip',
  insetBlockStart: '-1.8rem',
  width: 'calc(100% + 2px * 2)',
  left: '-2px',
})
export const heading = style({
  position: 'relative',
  display: 'inline-block',
  padding: `${theme.space[400]} ${theme.space[400]}`,
  marginInlineStart: theme.space[200],
  selectors: {
    '&::before, &::after': {
      content: '',
      position: 'absolute',
      translate: '0 -50%',
      insetBlockStart: '50%',
      width: '100vw',
      borderBlockStart: `2px solid ${theme.colors.primary}`,

      '@media': {
        print: {
          borderColor: theme.colors.black,
        },
      },
    },
    '&::before': {
      insetInlineEnd: '100%',
    },

    '&::after': {
      insetInlineStart: '100%',
    },
  },
})
