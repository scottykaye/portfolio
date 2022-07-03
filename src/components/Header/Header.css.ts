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

export const flex = style({
  display: 'flex',
});

export const headerStyle = style([flex, {
  backgroundColor: colors.background,
  fontFamily: theme.fonts.body,
  color: colors.normal,
  padding: `${theme.space[200]} `,
  position: 'relative',
  justifyContent: 'space-between',
  selectors: {

    '&::after': {
      content: '',
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      height: 5,
      background: `linear-gradient(-45deg, ${colors.gradient})`,
      backgroundSize: '400% 400%',

      '@media': {
        '(prefers-reduced-motion: no-preference)': {
          animation: `${animate} 5s linear infinite`,
        },
      },
    },
  },
}]);

export const innerHeaderStyle = style([flex, { justifyContent: 'space-between' }]);

export const container = style([flex, {
  gap: theme.space[500],
}]);

export const stack = style([flex, {
  flexDirection: 'column',
  justifyContent: 'center',
}]);
