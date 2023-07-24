import { style } from '@vanilla-extract/css';
import { theme } from '../../theme/theme.css';

export const navigationStyle = style({
  backgroundColor: theme.colors.background,
  color: theme.colors.normal,
  display: 'flex',
  flexGrow: '1',
  justifyContent: 'flex-end',
});

export const navListStyle = style({
  //overriding defaults
  padding: theme.space[0],
  margin: theme.space[0],
  listStyle: 'none',
  display: 'flex',
});

export const navListItemStyle = style({
  //overriding defaults
  padding: theme.space[0],
  margin: theme.space[0],
  listStyle: 'none',
  display: 'block',
  // borderTop: '5px solid #ccff00',
  borderTop: `5px solid ${theme.colors.primary}`,
  '@media': {
    print: {
      borderTop: `5px solid ${theme.colors.black}`,
    },
  },
});

export const activeStyle = style({
  backgroundColor: theme.colors.primary,
  color: theme.colors.inverse,
});

export const navLinkStyle = style({
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  height: '100%',
  padding: '0 3vw',
  textDecoration: 'none',
  transition: 'color 200ms ease, background-color 200ms ease',
  border: '2px solid transparent ',

  selectors: {
    '&:focus-visible': {
      outline: 0,
      borderColor: theme.colors.tertiary,
    },
    [`&:not(${activeStyle})`]: {
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
    },
  },
});
