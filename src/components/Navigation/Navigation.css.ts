import { style } from '@vanilla-extract/css';
import { theme, colors } from '../../theme/theme.css';

export const navigationStyle = style({
  backgroundColor: colors.background,
  color: colors.text.normal,
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
  color: colors.text.inverse,
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

  // Making sure our active style doesnt' change when using these states
  selectors: {
    // Set the color as long as its not active
    [`&:not(${activeStyle})`]: {
      color: colors.text.normal,
    },

    [`&:hover:not(${activeStyle})`]: {
      backgroundColor: colors.secondary,
      color: colors.text.inverse,
    },
    [`&:active:not(${activeStyle})`]: {
      backgroundColor: colors.secondary,
      color: colors.text.inverse,
    },
    [`&:focus:not(${activeStyle})`]: {
      backgroundColor: colors.secondary,
      color: colors.text.inverse,
    },
  },
});
