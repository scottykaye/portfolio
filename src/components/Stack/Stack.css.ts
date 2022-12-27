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
  0: { paddingTop: theme.space[0] },
  100: { paddingTop: theme.space[100] },
  200: { paddingTop: theme.space[200] },
  300: { paddingTop: theme.space[300] },
  400: { paddingTop: theme.space[400] },
  500: { paddingTop: theme.space[500] },
  600: { paddingTop: theme.space[600] },
  700: { paddingTop: theme.space[700] },
  800: { paddingTop: theme.space[800] },
  900: { paddingTop: theme.space[900] },
  1000: { paddingTop: theme.space[1000] },
});

export const pb = styleVariants({
  0: { paddingBottom: theme.space[0] },
  100: { paddingBottom: theme.space[100] },
  200: { paddingBottom: theme.space[200] },
  300: { paddingBottom: theme.space[300] },
  400: { paddingBottom: theme.space[400] },
  500: { paddingBottom: theme.space[500] },
  600: { paddingBottom: theme.space[600] },
  700: { paddingBottom: theme.space[700] },
  800: { paddingBottom: theme.space[800] },
  900: { paddingBottom: theme.space[900] },
  1000: { paddingBottom: theme.space[1000] },
});

export const pl = styleVariants({
  0: { paddingLeft: theme.space[0] },
  100: { paddingLeft: theme.space[100] },
  200: { paddingLeft: theme.space[200] },
  300: { paddingLeft: theme.space[300] },
  400: { paddingLeft: theme.space[400] },
  500: { paddingLeft: theme.space[500] },
  600: { paddingLeft: theme.space[600] },
  700: { paddingLeft: theme.space[700] },
  800: { paddingLeft: theme.space[800] },
  900: { paddingLeft: theme.space[900] },
  1000: { paddingLeft: theme.space[1000] },
});

export const pr = styleVariants({
  0: { paddingRight: theme.space[0] },
  100: { paddingRight: theme.space[100] },
  200: { paddingRight: theme.space[200] },
  300: { paddingRight: theme.space[300] },
  400: { paddingRight: theme.space[400] },
  500: { paddingRight: theme.space[500] },
  600: { paddingRight: theme.space[600] },
  700: { paddingRight: theme.space[700] },
  800: { paddingRight: theme.space[800] },
  900: { paddingRight: theme.space[900] },
  1000: { paddingRight: theme.space[1000] },
});

export const py = styleVariants({
  0: { paddingRight: theme.space[0], paddingBottom: theme.space[0] },
  100: { paddingTop: theme.space[100], paddingBottom: theme.space[100] },
  200: { paddingTop: theme.space[200], paddingBottom: theme.space[200] },
  300: { paddingTop: theme.space[300], paddingBottom: theme.space[300] },
  400: { paddingTop: theme.space[400], paddingBottom: theme.space[400] },
  500: { paddingTop: theme.space[500], paddingBottom: theme.space[500] },
  600: { paddingTop: theme.space[600], paddingBottom: theme.space[600] },
  700: { paddingTop: theme.space[700], paddingBottom: theme.space[700] },
  800: { paddingTop: theme.space[800], paddingBottom: theme.space[800] },
  900: { paddingTop: theme.space[900], paddingBottom: theme.space[900] },
  1000: { paddingTop: theme.space[1000], paddingBottom: theme.space[1000] },
});

export const px = styleVariants({
  0: { paddingRight: theme.space[0], paddingLeft: theme.space[0] },
  100: { paddingRight: theme.space[100], paddingLeft: theme.space[100] },
  200: { paddingRight: theme.space[200], paddingLeft: theme.space[200] },
  300: { paddingRight: theme.space[300], paddingLeft: theme.space[300] },
  400: { paddingRight: theme.space[400], paddingLeft: theme.space[400] },
  500: { paddingRight: theme.space[500], paddingLeft: theme.space[500] },
  600: { paddingRight: theme.space[600], paddingLeft: theme.space[600] },
  700: { paddingRight: theme.space[700], paddingLeft: theme.space[700] },
  800: { paddingRight: theme.space[800], paddingLeft: theme.space[800] },
  900: { paddingRight: theme.space[900], paddingLeft: theme.space[900] },
  1000: { paddingRight: theme.space[1000], paddingLeft: theme.space[1000] },
});
