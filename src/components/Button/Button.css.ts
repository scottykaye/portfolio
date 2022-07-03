import { style } from '@vanilla-extract/css';
import { theme, colors } from '../../theme/theme.css';

export const ButtonStyles = style({
  fontFamily: theme.fonts.body,
  backgroundColor: colors.primary,
  color: colors.inverse,

  // button style overrides
  border: 0,
  appearance: 'none',
  cursor: 'pointer',
  //
  // spacing
  margin: theme.space[100],
  padding: `${theme.space[300]} ${theme.space[400]}`,

  // button styling
  borderRadius: theme.space[100],
  minWidth: '48px',
  minHeight: '48px',
  transition:
    'color 200ms ease, background-color 200ms ease, transform 200ms ease, box-shadow 200ms ease',

  ':hover': {
    transform: 'translateY(-0.25em)',
    boxShadow: `0 0.5em 0.5em -0.4em ${colors.normal}`,
  },
  ':active': {
    transform: 'translateY(-0.25em) scale(1.1)',
  },
  ':focus-visible': {
    transform: 'translateY(-0.25em)',
    boxShadow: `0 0 0 2px ${colors.inverse}, 0 0 0 4px ${colors.normal}`,
  },
  ':focus': {
    boxShadow: `0 0 0 2px ${colors.inverse}, 0 0 0 4px ${colors.normal}`,
  },

  selectors: {
    '&:focus:not(:focus-visible)': {
      transform: 'translateY(-0.25em) scale(1.1)',
      boxShadow: `0 0 0 2px ${colors.inverse}, 0 0 0 4px ${colors.normal}`,
    },
  },
});
