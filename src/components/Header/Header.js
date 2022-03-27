import {HeaderStyle} from './Header.css';
import Button from './../../components/Button';
import {useTheme, dark, light} from './../../hooks';

export default function Header(props) {
  const {currentTheme, handleTheme} = useTheme();

  function toggleTheme() {
    handleTheme(currentTheme === light ? dark : light);
  }

  return (
    <header className={HeaderStyle} {...props}>
      <Button onClick={toggleTheme}>{currentTheme}</Button>

      {props.children}
    </header>
  );
}
