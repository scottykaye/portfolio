import { style, styleVariants } from '@vanilla-extract/css';
import { theme } from '../../theme/theme.css';

export const section = style({
  border: `2px solid ${theme.colors.primary}`,
  position: 'relative',
  padding: theme.space[400],
  marginBlock: theme.space[400],

  '@media': {
    print: {
      borderColor: theme.colors.black,
    },
  },
});

export const heading = style({
  position: 'absolute',
  insetBlockStart: '-1rem',
  background: theme.colors.background,
  padding: `${theme.space[100]} ${theme.space[200]}`,
});
