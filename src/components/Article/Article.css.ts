import { style } from '@vanilla-extract/css'
import { theme } from '../../theme/theme.css'

export const article = style({
  backgroundColor: theme.colors.background,
  color: theme.colors.normal,
  paddingTop: theme.space[200],
  paddingBottom: theme.space[200],
})

export const caption = style({
  fontSize: 14,
})
