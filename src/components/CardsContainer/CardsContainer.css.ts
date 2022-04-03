import { style } from '@vanilla-extract/css';
import { theme } from '../../theme/theme.css';

export const cardsContainerStyles = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
  gap: theme.space[200],
  margin: 'auto',
});
