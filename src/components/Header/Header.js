import React from 'react';
import { headerStyle , rightStyle} from './Header.css';
import Button from '../../components/Button';
import Toggle from '../../components/Toggle';
import { useTheme, dark, light } from '../../hooks';

export default function Header(props) {
  const { currentTheme, handleTheme } = useTheme();

  const theme = currentTheme === light ? dark : light;

  function toggleTheme() {
    handleTheme(theme);
  }

  return (
    <header className={headerStyle} {...props}>
      {props.children}
      <div className={rightStyle}>
      <Button onClick={toggleTheme}>{currentTheme}</Button>
        <Toggle onClick={toggleTheme} checked={currentTheme === dark} showLabel label={theme}/>
      </div>
    </header>
  );
}
