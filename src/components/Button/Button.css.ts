import {style} from '@vanilla-extract/css';
import {theme} from './../../theme.css';

export const ButtonStyles = style({
  fontFamily: theme.fonts.body,
  backgroundColor: theme.colors.primary,
  color: theme.colors.text.inverse,

  // button style overrides
  border: 0,
  appearance: 'none',
  cursor: 'pointer',

  // spacing
  margin: theme.space[100],
  padding: `${theme.space[300]} ${theme.space[400]}`,

  // button styling
  borderRadius: theme.space[100],
  minWidth: '48px',
  minHeight: '48px',
  transition:
    'color .2s ease, background-color .2s ease, transform .2s ease, box-shadow .2s ease',

  ':hover': {
    transform: 'translateY(-0.25em)',
    boxShadow: `0 0.5em 0.5em -0.4em ${theme.colors.text.normal}`,
  },
  ':active': {
    transform: 'translateY(-0.25em) scale(1.1)',
  },
  ':focus-visible': {
    transform: 'translateY(-0.25em)',
    boxShadow: `0 0 0 2px ${theme.colors.text.inverse}, 0 0 0 4px ${theme.colors.text.normal}`,
  },
  ':focus': {
    boxShadow: `0 0 0 2px ${theme.colors.text.inverse}, 0 0 0 4px ${theme.colors.text.normal}`,
  },

  // figure out why it doesn't like not later
  // @ts-ignore
  ':focus:not(:focus-visible)': {
    transform: 'translateY(-0.25em) scale(1.1)',
    boxShadow: `0 0 0 2px ${theme.colors.text.inverse}, 0 0 0 4px ${theme.colors.text.normal}`,
  },
});
