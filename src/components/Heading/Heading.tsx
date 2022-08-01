import React from 'react';
import * as styles from './Heading.css';

interface Props<T extends React.ElementType> {
  is?: T | string;
<<<<<<< HEAD
  color?: 'primary' | 'default' ;
=======
  color?: 'primary' | 'default';
>>>>>>> f42bbff97e8bf99bd30ed198472452669f38ca53
  [rest: string]: unknown;
}

export default function Heading<T extends React.ElementType = 'h2'>({ is = 'h2', color = 'default', ...props }: Props<T> & React.ComponentPropsWithoutRef<T>) {
  const Element = is;

<<<<<<< HEAD
  return <Element className={styles.headingStyle[color] && styles.headingStyle[color]} {...props} />;
=======
  return <Element className={styles.headingStyle[color]} {...props} />;
>>>>>>> f42bbff97e8bf99bd30ed198472452669f38ca53
}
