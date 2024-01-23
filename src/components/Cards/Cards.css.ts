import { style, keyframes } from '@vanilla-extract/css'

export const cardStyles = style({
  borderRadius: 10,
  outline: '1px solid',
  outlineOffset: -8,
  boxShadow: '3px 3px 10px rgba(0,0,0,.1)',
  position: 'relative',
  border: '5px solid transparent',
  height: 300,
  cursor: 'pointer',
})
