import { style, createVar, styleVariants } from '@vanilla-extract/css'
import { theme } from '../../theme/theme.css'

export const sidebarSize = createVar()

export const wrapper = style({
  display: 'flex',
  minHeight: '100%',
})

export const page = style({
  display: 'flex',
  flexDirection: 'column',
  flexGrow: '1',
  // transition: 'width .2s ease-in',
  overflow: 'auto',
})

export const sidebar = style({
  display: 'flex',
  flexDirection: 'column',
  width: sidebarSize,
  flexGrow: '1',
  height: '100%',
  // transition: 'width .2s ease-in',
  overflow: 'auto',
  scrollBehavior: 'smooth',
  // App specific aesthetics
  backgroundColor: theme.colors.inverse,
})

export const isAnchoredToParent = styleVariants({
  sticky: {
    position: 'sticky',
  },
  fixed: {
    position: 'fixed',
  },
})

export const pageSize = styleVariants({
  left: {
    marginInlineStart: sidebarSize,
  },
  right: {
    marginInlineEnd: sidebarSize,
  },
})
