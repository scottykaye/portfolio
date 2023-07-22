import React from "react";
import * as styles from "./List.css";

interface Props {
  children: React.ReactNode;
}

interface ItemProps extends Props {}

function Item({ children }: ItemProps) {
  return <li className={styles.listItem}>{children}</li>;
}

interface ListProps extends Props {}

export default function List({ children }: ListProps) {
  return <ul className={styles.list}>{children}</ul>;
}

List.Item = Item;
