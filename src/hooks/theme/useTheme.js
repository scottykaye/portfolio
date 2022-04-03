import { useContext, createContext } from 'react';

export const dark = 'dark';
export const light = 'light';
export const themes = {
  dark,
  light,
};

export const ThemesContext = createContext();

export function useTheme() {
  return useContext(ThemesContext);
}
