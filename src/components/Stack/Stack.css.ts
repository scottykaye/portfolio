import { style, createVar, styleVariants } from '@vanilla-extract/css';
import { theme } from '../../theme/theme.css';

export const size = createVar();

export const base = style({
  display: 'flex',
  flexDirection: 'column',
  gap: size,
});

export const grow = style({
  flexGrow: '1',
});

export const padding = styleVariants({
  0: { padding: theme.space[0] },
  100: { padding: theme.space[100] },
  200: { padding: theme.space[200] },
  300: { padding: theme.space[300] },
  400: { padding: theme.space[400] },
  500: { padding: theme.space[500] },
  600: { padding: theme.space[600] },
  700: { padding: theme.space[700] },
  800: { padding: theme.space[800] },
  900: { padding: theme.space[900] },
  1000: { padding: theme.space[1000] },
});

export const pt = styleVariants({
  0: { paddingBlockStart: theme.space[0] },
  100: { paddingBlockStart: theme.space[100] },
  200: { paddingBlockStart: theme.space[200] },
  300: { paddingBlockStart: theme.space[300] },
  400: { paddingBlockStart: theme.space[400] },
  500: { paddingBlockStart: theme.space[500] },
  600: { paddingBlockStart: theme.space[600] },
  700: { paddingBlockStart: theme.space[700] },
  800: { paddingBlockStart: theme.space[800] },
  900: { paddingBlockStart: theme.space[900] },
  1000: { paddingBlockStart: theme.space[1000] },
});

export const pb = styleVariants({
  0: { paddingBlockEnd: theme.space[0] },
  100: { paddingBlockEnd: theme.space[100] },
  200: { paddingBlockEnd: theme.space[200] },
  300: { paddingBlockEnd: theme.space[300] },
  400: { paddingBlockEnd: theme.space[400] },
  500: { paddingBlockEnd: theme.space[500] },
  600: { paddingBlockEnd: theme.space[600] },
  700: { paddingBlockEnd: theme.space[700] },
  800: { paddingBlockEnd: theme.space[800] },
  900: { paddingBlockEnd: theme.space[900] },
  1000: { paddingBlockEnd: theme.space[1000] },
});

export const pl = styleVariants({
  0: { paddingInlineStart: theme.space[0] },
  100: { paddingInlineStart: theme.space[100] },
  200: { paddingInlineStart: theme.space[200] },
  300: { paddingInlineStart: theme.space[300] },
  400: { paddingInlineStart: theme.space[400] },
  500: { paddingInlineStart: theme.space[500] },
  600: { paddingInlineStart: theme.space[600] },
  700: { paddingInlineStart: theme.space[700] },
  800: { paddingInlineStart: theme.space[800] },
  900: { paddingInlineStart: theme.space[900] },
  1000: { paddingInlineStart: theme.space[1000] },
});

export const pr = styleVariants({
  0: { paddingInlineEnd: theme.space[0] },
  100: { paddingInlineEnd: theme.space[100] },
  200: { paddingInlineEnd: theme.space[200] },
  300: { paddingInlineEnd: theme.space[300] },
  400: { paddingInlineEnd: theme.space[400] },
  500: { paddingInlineEnd: theme.space[500] },
  600: { paddingInlineEnd: theme.space[600] },
  700: { paddingInlineEnd: theme.space[700] },
  800: { paddingInlineEnd: theme.space[800] },
  900: { paddingInlineEnd: theme.space[900] },
  1000: { paddingInlineEnd: theme.space[1000] },
});

export const py = styleVariants({
  0: { paddingBlockStart: theme.space[0], paddingBlockEnd: theme.space[0] },
  100: { paddingBlockStart: theme.space[100], paddingBlockEnd: theme.space[100] },
  200: { paddingBlockStart: theme.space[200], paddingBlockEnd: theme.space[200] },
  300: { paddingBlockStart: theme.space[300], paddingBlockEnd: theme.space[300] },
  400: { paddingBlockStart: theme.space[400], paddingBlockEnd: theme.space[400] },
  500: { paddingBlockStart: theme.space[500], paddingBlockEnd: theme.space[500] },
  600: { paddingBlockStart: theme.space[600], paddingBlockEnd: theme.space[600] },
  700: { paddingBlockStart: theme.space[700], paddingBlockEnd: theme.space[700] },
  800: { paddingBlockStart: theme.space[800], paddingBlockEnd: theme.space[800] },
  900: { paddingBlockStart: theme.space[900], paddingBlockEnd: theme.space[900] },
  1000: { paddingBlockStart: theme.space[1000], paddingBlockEnd: theme.space[1000] },
});

export const px = styleVariants({
  0: { paddingInlineEnd: theme.space[0], paddingInlineStart: theme.space[0] },
  100: { paddingInlineEnd: theme.space[100], paddingInlineStart: theme.space[100] },
  200: { paddingInlineEnd: theme.space[200], paddingInlineStart: theme.space[200] },
  300: { paddingInlineEnd: theme.space[300], paddingInlineStart: theme.space[300] },
  400: { paddingInlineEnd: theme.space[400], paddingInlineStart: theme.space[400] },
  500: { paddingInlineEnd: theme.space[500], paddingInlineStart: theme.space[500] },
  600: { paddingInlineEnd: theme.space[600], paddingInlineStart: theme.space[600] },
  700: { paddingInlineEnd: theme.space[700], paddingInlineStart: theme.space[700] },
  800: { paddingInlineEnd: theme.space[800], paddingInlineStart: theme.space[800] },
  900: { paddingInlineEnd: theme.space[900], paddingInlineStart: theme.space[900] },
  1000: { paddingInlineEnd: theme.space[1000], paddingInlineStart: theme.space[1000] },
});
