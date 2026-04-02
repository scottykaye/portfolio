import { style } from '@vanilla-extract/css'

export const logo = style({
  width: 75,
  height: 75,
  '@media': {
    print: {
      width: 50,
      height: 50,
    },
  },
})
