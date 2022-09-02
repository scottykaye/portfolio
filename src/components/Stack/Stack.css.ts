import { style, createVar } from '@vanilla-extract/css';

export const size = createVar();

export const base = style({
  display: 'flex',
  flexDirection: 'column',
  gap: size,
});
