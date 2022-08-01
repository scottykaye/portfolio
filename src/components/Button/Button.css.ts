import { style } from '@vanilla-extract/css';
import { theme } from '../../theme/theme.css';

export const ButtonStyles = style({
  fontFamily: theme.fonts.body,
<<<<<<< HEAD
  backgroundColor: theme.colors.primary,
  color: theme.colors.inverse,
=======
  backgroundColor: colors.primary,
  color: colors.inverse,
>>>>>>> f42bbff97e8bf99bd30ed198472452669f38ca53

  // button style overrides
  border: 0,
  appearance: 'none',
  cursor: 'pointer',
  //
  // spacing
  margin: theme.space[100],
  padding: `${theme.space[300]} ${theme.space[400]}`,

  // button theme.styling
  borderRadius: theme.space[100],
  minWidth: '48px',
  minHeight: '48px',
  transition:
    'color 200ms ease, background-color 200ms ease, transform 200ms ease, box-shadow 200ms ease',

  ':hover': {
    transform: 'translateY(-0.25em)',
<<<<<<< HEAD
    boxShadow: `0 0.5em 0.5em -0.4em ${theme.colors.normal}`,
=======
    boxShadow: `0 0.5em 0.5em -0.4em ${colors.normal}`,
>>>>>>> f42bbff97e8bf99bd30ed198472452669f38ca53
  },
  ':active': {
    transform: 'translateY(-0.25em) scale(1.1)',
  },
  ':focus-visible': {
    transform: 'translateY(-0.25em)',
<<<<<<< HEAD
    boxShadow: `0 0 0 2px ${theme.colors.inverse}, 0 0 0 4px ${theme.colors.normal}`,
  },
  ':focus': {
    boxShadow: `0 0 0 2px ${theme.colors.inverse}, 0 0 0 4px ${theme.colors.normal}`,
=======
    boxShadow: `0 0 0 2px ${colors.inverse}, 0 0 0 4px ${colors.normal}`,
  },
  ':focus': {
    boxShadow: `0 0 0 2px ${colors.inverse}, 0 0 0 4px ${colors.normal}`,
>>>>>>> f42bbff97e8bf99bd30ed198472452669f38ca53
  },

  selectors: {
    '&:focus:not(:focus-visible)': {
      transform: 'translateY(-0.25em) scale(1.1)',
<<<<<<< HEAD
      boxShadow: `0 0 0 2px ${theme.colors.inverse}, 0 0 0 4px ${theme.colors.normal}`,
=======
      boxShadow: `0 0 0 2px ${colors.inverse}, 0 0 0 4px ${colors.normal}`,
>>>>>>> f42bbff97e8bf99bd30ed198472452669f38ca53
    },
  },
});
