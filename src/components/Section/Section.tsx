import { ReactNode, ElementType, ComponentPropsWithoutRef } from "react";
import * as styles from "./Section.css";
import Heading from "../Heading";

interface Props<T extends ElementType> {
  is?: T | string;
  children?: ReactNode;
  heading?: ReactNode;
}

export default function Section<T extends ElementType = "section">({
  is = "section",
  children,
  heading,
}: Props<T> & ComponentPropsWithoutRef<T>) {
  const Element = is;

  return (
    <Element className={styles.section}>
      <div className={styles.heading}>
        {heading && (
          <Heading is="h2" fontSize={14}>
            {heading}
          </Heading>
        )}
      </div>
      {children}
    </Element>
  );
}
