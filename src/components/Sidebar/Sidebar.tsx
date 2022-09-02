import React from 'react';
import { assignInlineVars } from '@vanilla-extract/dynamic';
import * as styles from './Sidebar.css';

function Wrapper(props) {
  return <div className={styles.wrapper}>{props.children}</div>;
}

function Page(props) {
  return <div className={styles.page}>{props.children}</div>;
}

interface Props {
  children: React.ReactNode;
  resize?: string;
  ariaLabel?: string;
  props: { [key: string]: unknown };
}

export default function Sidebar({
  children, resize = '32px', ariaLabel = 'Navigation', ...props
}: Props) {
  return (
    <nav
      className={styles.sidebar}
      style={assignInlineVars({ [styles.sidebarSize]: resize })}
      {...props}

    >
      {children}
    </nav>
  );
}

Sidebar.Wrapper = Wrapper;
Sidebar.Page = Page;
