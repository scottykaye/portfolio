import { style, keyframes } from '@vanilla-extract/css';
import { theme, colors } from '../../theme/theme.css';

const animate = keyframes({
  '0%': {
    backgroundPosition: '0% 50%',
  },
  '50%': {
    backgroundPosition: '100% 50%',
  },
  '100%': {
    backgroundPosition: '0% 50%',
  },
});
export const cardStyles = style({
  outline: '4px solid',
  outlineOffset: -8,
  outlineColor: colors.inverse,
  boxShadow: '3px 3px 10px rgba(0,0,0,.1)',
  position: 'relative',
  border: '5px solid transparent',
  color: colors.inverse,
  padding: theme.space[600],
  // height: 300,
  cursor: 'pointer',
  background: `linear-gradient(-45deg, ${colors.primary},${colors.secondary})`,
  backgroundSize: '400% 400%',

  '@media': {
    '(prefers-reduced-motion: no-preference)': {
      animation: `${animate} 14s linear infinite`,
    },
  },

  // ':before': {
  //   content: '',
  //   position: 'absolute',
  //   inset: -5,
  //   background: 'linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)',
  //   backgroundSize: '400% 400%',
  //   animation: `${animate} 10s linear infinite`,
  //   // transform: 'scale(1)',
  //   overflow: 'hidden',
  //   borderRadius: 10,
  // },
});

export const cardImageStyles = style({
  // position: 'absolute'
  // inset: 0,
  // width: '100%',
  // height: '100%',
  // objectFit: 'cover',
  // borderRadius: 10,

  // opacity: 1,
  // transition: 'transform 750ms',

  // selectors: {
  //   [`${cardStyles}:hover &`]: {
  //     transform: 'scale(1.05)',
  //   },
  // },
});

export const cardTitleStyles = style({
  // position: 'absolute',
  left: theme.space[600],
  bottom: theme.space[600],
  right: theme.space[600],
  fontSize: 20,
  textShadow: '0 0 1px rgba(0,0,0, .5)',
});
