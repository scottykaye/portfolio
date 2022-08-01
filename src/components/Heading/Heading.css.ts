import { styleVariants } from '@vanilla-extract/css';
import { theme } from '../../theme/theme.css';

export const headingStyle = styleVariants(
  {
    default: {},
    primary: {
      color: theme.colors.primary,
    },
  },
  (color) => [color,
    {
      fontFamily: theme.fonts.heading,
      fontSize: 30,
      display: 'flex',
      alignItems: 'center',
    },
  ],

);
