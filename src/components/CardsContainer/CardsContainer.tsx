import React from 'react';
import { cardsContainerStyles } from './CardsContainer.css';

interface Props {
  children: React.ReactNode;
}

export default function CardsContainer({ children }: Props) {
  return <div className={cardsContainerStyles}>{children}</div>;
}
