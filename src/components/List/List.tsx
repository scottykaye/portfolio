import React from 'react';
import * as styles from './List.css';

import { assignInlineVars } from '@vanilla-extract/dynamic';

function stringOrNumber(fontSize: string | number) {
  if (typeof fontSize === 'number') {
    return `${fontSize}px`;
  }
  return fontSize;
}
interface Props {
  children: React.ReactNode;
}

interface ItemProps extends Props {
  margin?: string | number;
}

function Item({ children, margin }: ItemProps) {
  return (
    <li
      style={assignInlineVars({
        [styles.margin]: stringOrNumber(margin),
      })}
      className={styles.listItem}
    >
      {children}
    </li>
  );
}

interface ListProps extends Props {
  listStyle?: 'none' | 'default';
}

export default function List({ children, listStyle = 'default' }: ListProps) {
  return <ul className={styles.list[listStyle]}>{children}</ul>;
}

List.Item = Item;
