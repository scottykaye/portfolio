import { style, keyframes } from '@vanilla-extract/css';
import { theme } from '../../theme/theme.css';

// const animate = keyframes({
//   '0%': {
//     backgroundPosition: '0% 50%',
//   },
//   '50%': {
//     backgroundPosition: '100% 50%',
//   },
//   '100%': {
//     backgroundPosition: '0% 50%',
//   },
// });

export const card = style({
  overflow: 'hidden',
  // outline: '5px solid',
  // outlineOffset: -10,
  // outlineColor: theme.colors.inverse,
  position: 'relative',
  // border: '4px solid transparent',
  color: theme.colors.normal,
  paddingTop: theme.space[300],
  marginTop: theme.space[500],
  // height: 300,
  // cursor: 'pointer',
  // backgroundSize: '400% 400%',
  // zIndex: 1,

  // '@media': {
  //   '(prefers-reduced-motion: no-preference)': {
  //     animation: `${animate} 14s linear infinite`,
  //   },
  // },

  // ':before': {
  //   content: '',
  //   position: 'absolute',
  //   inset: 1,
  //   zIndex: -1,
  //   background: theme.colors.background,
  //   // transform: 'scale(1)',
  // },

  // ':after': {
  //   content: '',
  //   position: 'absolute',
  //   inset: -4,
  //   zIndex: -2,
  //   background: `linear-gradient(-45deg, ${theme.colors.primary},${theme.colors.secondary})`,
  // },
  selectors: {
    '& + &': {
      borderTop: `1px solid ${theme.colors.gray}`,
    },
  },
});

// export const image = style({
//   maxWidth: '100%',
//   maxHeight: '100%',
// });
