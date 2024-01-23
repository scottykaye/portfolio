import { style } from '@vanilla-extract/css'
import { theme } from '../../theme/theme.css'

export const app = style({
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100%',
  padding: theme.space[1000],
})

// Stub out sets inverse
// export const logoBGColor = style({ fill: theme.colors.normal });
// export const logoFillColor = style({ fill: theme.colors.inverse });

export const logoBGColor = style({ fill: theme.colors.black })
export const logoFillColor = style({ fill: theme.colors.white })

export const skipNav = style({
  userSelect: 'none',
  position: 'absolute',
  top: 0,
  right: '100%',
  padding: `${theme.space[200]} ${theme.space[1000]}`,
  backgroundColor: theme.colors.background,
  color: theme.colors.normal,
  fontWeight: 'bold',
  fontSize: theme.fonts.heading,
  zIndex: 10000,
  ':focus': {
    right: 'auto',
    left: 0,
  },
})

export const flex = style({ display: 'flex' })
