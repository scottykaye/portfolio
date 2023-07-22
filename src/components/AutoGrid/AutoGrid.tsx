import React from 'react';
import * as styles from './AutoGrid.css';

interface Props {
  children: React.ReactNode;
  alignItems?: 'flexStart' | 'default' | 'center';
}

export default function AutoGrid({ children, alignItems = 'default' }: Props) {
  return <div className={styles.autoGrid[alignItems]}>{children}</div>;
}
