import { style } from '@vanilla-extract/css';
import { colors } from '../../theme/theme.css';

export const navigationStyle = style({
  backgroundColor: colors.background,
  color: colors.normal,
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
  borderTop: `5px solid ${colors.primary}`,
});

export const activeStyle = style({
  backgroundColor: colors.primary,
  color: colors.inverse,
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
      borderColor: colors.tertiary,
    },
    [`&:not(${activeStyle})`]: {
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

    },
  },
});
