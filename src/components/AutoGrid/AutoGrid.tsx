import React from 'react';
import { cardsContainerStyles } from './ AutoGrid.css';

interface Props {
  children: React.ReactNode;
}

export default function AutoGrid({ children }: Props) {
  return <div className={cardsContainerStyles}>{children}</div>;
}
