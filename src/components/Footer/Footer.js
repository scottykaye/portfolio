import { footerStyle, rightStyle, footerInnerStyle } from './Footer.css';
import Wrapper from '../Wrapper';

export default function Footer({ children }) {
  return <footer className={footerStyle}><Wrapper><div className={footerInnerStyle}>{children}</div></Wrapper></footer>;
}

export function FooterRightContainer({ children }) {
  return <div className={rightStyle}>{children}</div>;
}
