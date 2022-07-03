import React from 'react';
import Wrapper from '../Wrapper';
import * as styles from './Header.css';

interface Props {
  children: React.ReactNode;
}

export default function Header(props: Props) {
  return (
    <header className={styles.headerStyle} {...props}>
      <Wrapper>
        <div className={styles.innerHeaderStyle}>{props.children}</div>
      </Wrapper>
    </header>
  );
}

export function HeaderContainer(props) {
  return <div className={styles.container} {...props} />;
}

export function HeaderStack(props) {
  return <div className={styles.stack} {...props} />;
}
