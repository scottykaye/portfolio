import React from 'react';
import * as styles from './Card.css';

interface Props {
  children: React.ReactNode;
}

export default function Card({ children }: Props) {
  return (
    <div className={styles.card}>
      <img className={styles.image} src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/grogu-baby-yoda-the-child-1606497947.png?crop=0.585xw:0.927xh;0.245xw,0.0729xh&resize=768:*" alt="" />
      {children}
    </div>
  );
}
