import {style, keyframes} from '@vanilla-extract/css';
import {theme} from '@/hooks/theme/theme.css';

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

export const CardStyles = style({
  backgroundColor: theme.colors.background,
  fontFamily: theme.fonts.body,
  color: theme.colors.text.normal,
  padding: `${theme.space[1000]} ${theme.space[200]}`,
  position: 'relative',
  ':before': {
    content: '',
    position: 'absolute',
    top: '0',
    left: 0,
    right: 0,
    height: 5,
    background: `linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)`,
    backgroundSize: '400% 400%',
    animation: `${animate} 15s linear infinite`,
  },
});
