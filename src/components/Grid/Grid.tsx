import { ReactNode, ElementType, ComponentPropsWithoutRef } from "react";
import * as styles from "./Grid.css";

interface Props<T extends ElementType> {
  is?: T | string;
  children: ReactNode;
}

export default function Grid<T extends ElementType = "div">({
  is = "div",
  children,
}: Props<T> & ComponentPropsWithoutRef<T>) {
  return <div className={styles.grid}>{children}</div>;
}
