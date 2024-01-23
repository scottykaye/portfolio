import { style } from '@vanilla-extract/css'
import { theme } from '../theme/theme.css'

export const home = style({
  containerType: 'inline-size',
  containerName: 'home',
  marginBlock: theme.space[800],
})
