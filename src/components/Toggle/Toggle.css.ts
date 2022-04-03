import { style, createVar, fallbackVar } from '@vanilla-extract/css';
import { theme, colors } from '../../theme/theme.css';

export const toggleStyle = style({
  position: 'relative',
});

// Size is the base building block for each item. Based on this size the width and height and label space will be set
const size = '40px';

const width = createVar();
const height = createVar();

export const checkStyles = style({
  vars: {
    [height]: size,
    [width]: `calc(${size} * 2)`,
  },

  display: 'inline-flex',
  width,
  height,
  appearance: 'none',
  borderRadius: '25% / 50%',
  backgroundColor: colors.primary,
  cursor: 'pointer',
  border: `4px solid ${colors.primary}`,
  transition:
    'color 200ms ease, background-color 200ms ease, transform 200ms ease-in-out, box-shadow 200ms ease',

  ':checked': {
    backgroundColor: colors.secondary,

  },

  '::after': {
    content: '',
    borderRadius: '50%',
    backgroundColor: colors.background,
    width: '50%',
    height: '100%',
    transition: 'background-color 200ms ease-in-out, transform 200ms ease-in-out',
  },

  ':hover': {
    transform: 'translateY(-0.25em)',
    boxShadow: `0 0.5em 0.5em -0.4em ${colors.text.normal}`,
  },
  ':active': {
    transform: 'translateY(-0.25em) scale(1.1)',
  },
  ':focus-visible': {
    transform: 'translateY(-0.25em)',
    boxShadow: `0 0 0 2px ${colors.text.inverse}, 0 0 0 4px ${colors.text.normal}`,
  },
  ':focus': {
    boxShadow: `0 0 0 2px ${colors.text.inverse}, 0 0 0 4px ${colors.text.normal}`,
  },

  selectors: {
    '&:checked::after': {
      transform: 'translate(100%)',
    },

    '&:focus:not(:focus-visible)': {
      // use to also scale on focus
      transform: 'translateY(-0.25em) scale(1.1)',
      boxShadow: `0 0 0 2px ${colors.text.inverse}, 0 0 0 4px ${colors.text.normal}`,
    },
  },
});

// If we wanted label styles

// export const labelStyles = style({
//   vars: {
//     [width]: `calc(${size} / 1.333)`,
//   },

//   fontFamily: theme.fonts.body,
//   display: 'block',
//   position: 'absolute',
//   top: 0,
//   left: 8,
//   right: 8,
//   width,
//   transform: 'translate(100%, 50%)',
//   color: colors.text.inverse,
//   transition: 'background-color 200ms ease-in-out, transform 200ms ease-in-out',
//   pointerEvents: 'none',
//   fontSize: '14px',

//   textOverflow: 'ellipsis',
//   overflow: 'hidden',
//   whiteSpace: 'nowrap',

//   selectors: {
//     [`${checkStyles}:focus ~ &`]: {
//       transform: 'translate(100%, calc(50% - 0.25em))',
//     },
//     [`${checkStyles}:hover ~ &`]: {
//       transform: 'translate(100%, calc(50% - 0.25em))',
//     },
//     [`${checkStyles}:active ~ &`]: {
//       transform: 'translate(100%, calc(50% - 0.25em)) scale(1.1)',
//     },

//     [`${checkStyles}:checked:focus  ~ &`]: {
//       transform: 'translate(0, calc(50% - 0.25em))',
//     },
//     [`${checkStyles}:checked ~ &`]: {
//       transform: 'translate(0, 50%)',
//     },
//     [`${checkStyles}:checked:hover ~ &`]: {
//       transform: 'translate(0, calc(50% - 0.25em))',
//     },
//     [`${checkStyles}:checked:active ~ &`]: {
//       transform: 'translate(0, calc(50% - 0.25em)) scale(1.1)',
//     },
//   },
// });
