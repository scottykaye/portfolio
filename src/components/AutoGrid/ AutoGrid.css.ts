import { style } from '@vanilla-extract/css';
import { theme } from '../../theme/theme.css';

export const cardsContainerStyles = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
  gap: theme.space[500],
  margin: `${theme.space[1000]} auto`,
  width: '100%',
});
