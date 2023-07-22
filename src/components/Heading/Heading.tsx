import React from "react";
import { assignInlineVars } from "@vanilla-extract/dynamic";
import * as styles from "./Heading.css";

interface Props<T extends React.ElementType> {
  is?: T | string;
  color?: "primary" | "default";
  fontSize?: number | string;
  [rest: string]: unknown;
}

function stringOrNumber(fontSize: string | number) {
  if (typeof fontSize === "number") {
    return `${fontSize}px`;
  }
  return fontSize;
}

export default function Heading<T extends React.ElementType = "h2">({
  is = "h2",
  color = "default",
  fontSize = 30,
  ...props
}: Props<T> & React.ComponentPropsWithoutRef<T>) {
  const Element = is;

  return (
    <Element
      style={assignInlineVars({
        [styles.size]: stringOrNumber(fontSize),
      })}
      fontSize={styles.size}
      className={styles.headingStyle[color]}
      {...props}
    />
  );
}
