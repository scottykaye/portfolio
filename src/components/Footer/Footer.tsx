import React from 'react';
import * as styles from './Footer.css';
import Wrapper from '../Wrapper';

interface Props {
  children: React.ReactNode;
}

export default function Footer({ children }: Props) {
  return (
    <footer className={styles.footerStyle}>
      <Wrapper>
        <div className={styles.footerInnerStyle}>{children}</div>
      </Wrapper>
    </footer>
  );
}

export function FooterRightContainer({ children }: Props) {
  return <div className={styles.rightStyle}>{children}</div>;
}
