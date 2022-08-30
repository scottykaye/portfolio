import {
  style, createVar,
} from '@vanilla-extract/css';
// import { theme } from '../../theme/theme.css';

export const sidebarSize = createVar();

export const wrapper = style({
  display: 'flex',
  minHeight: '100%',
});

export const page = style({
  flexGrow: '1',
  transition: 'flex-basis .2s ease-in',
  overflow: 'auto',

});

export const sidebar = style({
  flexBasis: sidebarSize,
  flexGrow: '1',
  flexShrink: '0',
  transition: 'flex-basis .2s ease-in',
  overflow: 'auto',
  scrollBehavior: 'smooth',
});
