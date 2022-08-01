import { style } from '@vanilla-extract/css';
import { theme } from '../../theme/theme.css';

export const navigationStyle = style({
<<<<<<< HEAD
  backgroundColor: theme.colors.background,
  color: theme.colors.normal,
=======
  backgroundColor: colors.background,
  color: colors.normal,
>>>>>>> f42bbff97e8bf99bd30ed198472452669f38ca53
  display: 'flex',
});

export const navListStyle = style({
  listStyle: 'none',
  display: 'flex',
});

export const navListItemStyle = style({
  listStyle: 'none',
  display: 'block',
  // borderTop: '5px solid #ccff00',
  borderTop: `5px solid ${theme.colors.primary}`,
});

export const activeStyle = style({
<<<<<<< HEAD
  backgroundColor: theme.colors.primary,
  color: theme.colors.inverse,
=======
  backgroundColor: colors.primary,
  color: colors.inverse,
>>>>>>> f42bbff97e8bf99bd30ed198472452669f38ca53
});

export const navLinkStyle = style({
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  height: '100%',
  padding: '0 50px',
  textDecoration: 'none',
  transition:
    'color 200ms ease, background-color 200ms ease',
  border: '2px solid transparent ',

  selectors: {
    '&:focus-visible': {
      outline: 0,
      borderColor: theme.colors.tertiary,
    },
    [`&:not(${activeStyle})`]: {
<<<<<<< HEAD
      color: theme.colors.normal,
    },

    [`&:hover:not(${activeStyle})`]: {
      backgroundColor: theme.colors.secondary,
      color: theme.colors.inverse,
    },
    [`&:active:not(${activeStyle})`]: {
      backgroundColor: theme.colors.secondary,
      color: theme.colors.inverse,
    },
    [`&:focus:not(${activeStyle})`]: {
      backgroundColor: theme.colors.secondary,
      color: theme.colors.inverse,

=======
      color: colors.normal,
    },

    [`&:hover:not(${activeStyle})`]: {
      backgroundColor: colors.secondary,
      color: colors.inverse,
    },
    [`&:active:not(${activeStyle})`]: {
      backgroundColor: colors.secondary,
      color: colors.inverse,
    },
    [`&:focus:not(${activeStyle})`]: {
      backgroundColor: colors.secondary,
      color: colors.inverse,
>>>>>>> f42bbff97e8bf99bd30ed198472452669f38ca53
    },
  },
});
