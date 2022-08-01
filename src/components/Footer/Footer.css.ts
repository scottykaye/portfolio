import { style, keyframes } from '@vanilla-extract/css';
import { theme } from '../../theme/theme.css';

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

const flex = style({
  display: 'flex',
});

export const footerStyle = style([flex, {
  backgroundColor: theme.colors.background,

  fontFamily: theme.fonts.body,
<<<<<<< HEAD
  color: theme.colors.normal,
  padding: `${theme.space[1000]} 0`,
  position: 'relative',

  selectors: {
    '&::before, &::after': {
      content: '',
      position: 'absolute',
      left: 0,
      right: 0,
      height: 5,
      background: `linear-gradient(-45deg, ${theme.colors.primary},${theme.colors.secondary},${theme.colors.tertiary})`,
=======
  color: colors.normal,
  padding: `${theme.space[600]} 0`,
  position: 'relative',

  selectors: {
    '&::before': {
      content: '',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      height: 5,
      // background: 'linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)',
      background: `linear-gradient(-45deg, ${colors.gradient})`,
>>>>>>> f42bbff97e8bf99bd30ed198472452669f38ca53
      backgroundSize: '400% 400%',

      '@media': {
        '(prefers-reduced-motion: no-preference)': {
          animation: `${animate} 5s linear infinite`,
        },
      },
    },
<<<<<<< HEAD

    '&::before': {
      top: 0,
      // display: 'none'
    },

    '&::after': {
      bottom: 0,
    },
=======
>>>>>>> f42bbff97e8bf99bd30ed198472452669f38ca53
  },

}]);

export const footerInnerStyle = style([flex, {
  justifyContent: 'space-between',

}]);

export const rightStyle = style([flex, {
  gap: theme.space[200],
  fill: theme.colors.primary,
}]);
