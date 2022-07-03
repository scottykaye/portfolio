import React from 'react';
import * as styles from './Cards.css';

interface Props {
  children: React.ReactNode;
}

export default function Cards({ children }: Props) {
  return (
    <div className={styles.cardStyles}>
      <div className={styles.cardImageStyles} />
      <div className={styles.cardTitleStyles}>{children}</div>
    </div>
  );
}
