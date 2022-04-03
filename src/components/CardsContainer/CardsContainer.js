import React from 'react';
import { cardsContainerStyles } from './CardsContainer.css';

export default function CardsContainer({ children }) {
  return <div className={cardsContainerStyles}>{children}</div>;
}
