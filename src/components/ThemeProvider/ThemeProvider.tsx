import {
  useMemo, useEffect, ReactNode, useRef,
} from 'react';

import {
  ThemesContext,
  useLocalStorage,
} from '../../hooks';

interface Props {
  children: ReactNode
  defaultTheme: string
}

// const darkMode = {
//   getSetting() {
//     try {
//       return JSON.parse(window.localStorage.getItem('theme')) === 'light';
//     } catch (e) { return 'dark'; }
//   },

//   updateSetting(value) {
//     try {
//       console.log(value, window.localStorage.setItem('theme', JSON.stringify(value === true)));
//       window.localStorage.setItem('theme', JSON.stringify(value === true));
//     } catch (e) {}
//   },
// };

export default function ThemeProvider({ children, defaultTheme = 'light' }: Props) {
  const [currentTheme, setCurrentTheme] = useLocalStorage(defaultTheme, 'theme');

  const theme = useMemo(() => ({ setCurrentTheme, currentTheme }), [setCurrentTheme, currentTheme]);

  const prevCurrentTheme = useRef();
  useEffect(() => {
    document.documentElement.classList.add(currentTheme);

    if (prevCurrentTheme.current) {
      document.documentElement.classList.remove(prevCurrentTheme.current);
    }

    prevCurrentTheme.current = currentTheme;
  }, [currentTheme]);

  return (
    <ThemesContext.Provider value={theme}>
      {children}
    </ThemesContext.Provider>
  );
}
