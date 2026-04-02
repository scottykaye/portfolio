import { style } from '@vanilla-extract/css';
import { theme } from '../../theme/theme.css';

export const breadcrumb = style({
  // overriding list defaults
  margin: theme.space[0],
  padding: theme.space[0],
  fontSize: 14,
  selectors: {
    '&:not(:last-of-type)::after': {
      content: '👉',
      marginInline: theme.space[100],
    },
  },
});

export const breadcrumbs = style({
  display: 'flex',
  listStyle: 'none',
  // overriding list defaults
  marginBlock: `${theme.space[200]} ${theme.space[500]}`,
  padding: theme.space[0],
  '@media': {
    print: {
      display: 'none',
    },
  },
});
