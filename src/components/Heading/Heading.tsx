import React from 'react';
import * as styles from './Heading.css';

interface Props<T extends React.ElementType> {
  is?: T | string;
  color?: 'primary' | 'default' ;
  [rest: string]: unknown;
}

export default function Heading<T extends React.ElementType = 'h2'>({ is = 'h2', color = 'default', ...props }: Props<T> & React.ComponentPropsWithoutRef<T>) {
  const Element = is;

  return <Element className={styles.headingStyle[color] && styles.headingStyle[color]} {...props} />;
}
