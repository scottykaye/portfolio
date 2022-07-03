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
  borderRadius: 10,
  outline: '1px solid',
  outlineOffset: -8,
  boxShadow: '3px 3px 10px rgba(0,0,0,.1)',
  position: 'relative',
  border: '5px solid transparent',
  // overflow: 'hidden',
  height: 300,
  cursor: 'pointer',

  ':before': {
    content: '',
    position: 'absolute',
    inset: -5,
    // background: 'linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)',
    backgroundSize: '400% 400%',
    animation: `${animate} 10s linear infinite`,
    // transform: 'scale(1)',
    overflow: 'hidden',
    borderRadius: 10,
  },
});

export const cardImageStyles = style({
  position: 'absolute',
  inset: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  borderRadius: 10,
  backgroundColor: colors.background,
  // opacity: 0.6,
  opacity: 1,
  transition: 'transform 750ms',

  selectors: {
    [`${cardStyles}:hover &`]: {
      transform: 'scale(1.05)',
    },
  },
});

export const cardTitleStyles = style({
  position: 'absolute',
  left: theme.space[600],
  bottom: theme.space[600],
  right: theme.space[600],
  fontSize: 20,
  textShadow: '0 0 1px rgba(0,0,0, .5)',
});

// backgroundColor: colors.background,
// fontFamily: theme.fonts.body,
// color: colors.normal,
// padding: `${theme.space[1000]} ${theme.space[200]}`,
// position: 'relative',
//
