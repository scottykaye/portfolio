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

const flex = style({
  display: 'flex',
});

export const headerStyle = style([flex, {
  backgroundColor: colors.background,
  fontFamily: theme.fonts.body,
  color: colors.text.normal,
  padding: `${theme.space[200]} `,
  position: 'relative',

  ':after': {
    content: '',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 5,
    background: 'linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)',
    backgroundSize: '400% 400%',
    animation: `${animate} 10s linear infinite`,
  },
}]);

export const innerHeaderStyle = style([flex]);

export const rightStyle = style([flex, { marginLeft: 'auto' }]);

export const centerStyle = style([flex, {
  justifyContent: 'center',
  flexDirection: 'column',
  margin: theme.space[500],
  gap: theme.space[200],
}]);
