import { styleVariants } from '@vanilla-extract/css';
<<<<<<< HEAD
import { theme } from '../../theme/theme.css';

export const headingStyle = styleVariants(
  {
    default: {},
    primary: {
      color: theme.colors.primary,
=======
import { theme, colors } from '../../theme/theme.css';

export const headingStyle = styleVariants(
  {
    default: {
      color: colors.normal,
    },
    primary: {
      color: colors.primary,
>>>>>>> f42bbff97e8bf99bd30ed198472452669f38ca53
    },
  },
  (color) => [color,
    {
<<<<<<< HEAD
      fontFamily: theme.fonts.heading,
      fontSize: 30,
=======
      backgroundColor: colors.background,
      fontFamily: theme.fonts.heading,
      fontSize: 32,
      padding: `${theme.space[200]} 0${theme.space[400]}`,
>>>>>>> f42bbff97e8bf99bd30ed198472452669f38ca53
      display: 'flex',
      alignItems: 'center',
    },
  ],

);
