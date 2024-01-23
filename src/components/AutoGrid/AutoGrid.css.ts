import { styleVariants } from '@vanilla-extract/css'
import { theme } from '../../theme/theme.css'

export const autoGrid = styleVariants(
  {
    flexStart: {
      alignItems: 'flex-start',
    },
    default: {},
    center: {
      alignItems: 'center',
    },
  },
  (alignItems) => [
    alignItems,
    {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: theme.space[500],
      margin: 'auto',
    },
  ],
)
