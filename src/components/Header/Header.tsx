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

<<<<<<< HEAD
interface HeaderProps {
  [key: string]: unknown
}

export function HeaderContainer(props:HeaderProps) {
  return <div className={styles.container} {...props} />;
}

export function HeaderStack(props: HeaderProps) {
=======
export function HeaderContainer(props) {
  return <div className={styles.container} {...props} />;
}

export function HeaderStack(props) {
>>>>>>> f42bbff97e8bf99bd30ed198472452669f38ca53
  return <div className={styles.stack} {...props} />;
}
