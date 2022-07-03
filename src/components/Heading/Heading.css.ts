import { styleVariants } from '@vanilla-extract/css';
import { theme, colors } from '../../theme/theme.css';

export const headingStyle = styleVariants(
  {
    default: {
      color: colors.normal,
    },
    primary: {
      color: colors.primary,
    },
  },
  (color) => [color,
    {
      backgroundColor: colors.background,
      fontFamily: theme.fonts.heading,
      fontSize: 32,
      padding: `${theme.space[200]} 0${theme.space[400]}`,
      display: 'flex',
      alignItems: 'center',
    },
  ],

);
