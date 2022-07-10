import React from 'react';
import * as styles from './FullClick.css';

interface Props<T extends React.ElementType> {
  is?: T | string;
  [rest: string]: unknown;
}

export default function FullClick<T extends React.ElementType = 'a'>({ is = 'a', ...props }: Props<T> & React.ComponentPropsWithoutRef<T>) {
  const Element = is;

  return <Element className={styles.base} {...props} />;
}
