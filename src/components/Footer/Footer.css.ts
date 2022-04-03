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

export const footerStyle = style([flex, {
  backgroundColor: colors.background,
  fontFamily: theme.fonts.body,
  color: colors.text.normal,
  padding: `${theme.space[600]} 0`,
  position: 'relative',

  ':before': {
    content: '',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 5,
    background: 'linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)',
    backgroundSize: '400% 400%',
    animation: `${animate} 10s linear infinite`,
  },
}]);

export const footerInnerStyle = style([flex, {
  justifyContent: 'space-between',

}]);

export const rightStyle = style([flex, {
  gap: theme.space[200],
  fill: colors.primary,
}]);
