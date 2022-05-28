import React from 'react';
import Wrapper from '../Wrapper';
import * as styles from './Header.css';

interface Props {
  children: React.ReadNode;
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

export function SplitContainer(props) {
  return <div className={styles.rightStyle} {...props} />;
}

export function CenterContainer(props) {
  return <div className={styles.centerStyle} {...props} />;
}
