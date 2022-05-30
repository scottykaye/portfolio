import React from 'react';
import * as styles from './Cards.css';

interface Props {
  children: React.ReactNode;
}

export default function Cards({ children }: Props) {
  return (
    <div className={styles.cardStyles}>
      <div className={styles.cardImageStyles} />
      {/* <img className={styles.cardImageStyles} src="https://www.placecage.com/800/600" /> */}
      <div className={styles.cardTitleStyles}>{children}</div>
    </div>
  );
}
