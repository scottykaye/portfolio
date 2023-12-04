import React from "react";
import * as styles from "./Card.css";

interface Props<T> {
  children: React.ReactNode;
  is?: T;
}

export default function Card<T extends React.ElementType>({
  children,
  is,
}: Props<T>) {
  const Element = is ?? "div";

  return <Element className={styles.card}>{children}</Element>;
}
