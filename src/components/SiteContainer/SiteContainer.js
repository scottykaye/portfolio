import {useState, useEffect} from 'react';
import {SiteContainerStyles} from './SiteContainer.css';
import {
  ThemesContext,
  useLocalStorage,
  themes,
  light,
  dark,
} from './../../hooks';
import {lightTheme, darkTheme} from './../../theme.css';

export default function SiteContainer(props) {
  const [currentTheme, setCurrentTheme] = useLocalStorage(light, light);

  // Just let this be extendable
  function handleTheme(theme) {
    setCurrentTheme(theme);
  }

  return (
    <ThemesContext.Provider value={{handleTheme, currentTheme}}>
      <div
        //@TODO Lets use className packages here:
        className={`${SiteContainerStyles} ${
          currentTheme === light ? lightTheme : darkTheme
        } `}
        {...props}
      >
        {props.children}
      </div>
    </ThemesContext.Provider>
  );
}
