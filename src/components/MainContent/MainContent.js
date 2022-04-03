import { mainContentStyle } from './MainContent.css';
import Wrapper from '../Wrapper';

export default function MainContent({ children }) {
  return <main className={mainContentStyle}><Wrapper>{children}</Wrapper></main>;
}
