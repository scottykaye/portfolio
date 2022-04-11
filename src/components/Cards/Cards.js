import React from 'react';
import {
  cardStyles,
  cardImageStyles,
  cardTitleStyles,
} from './Cards.css';

export default function Cards({ children }) {
  return (
    <div className={cardStyles}>
      <div className={cardImageStyles} />
      {/* <img className={cardImageStyles} src="https://www.placecage.com/800/600" /> */}
      <div className={cardTitleStyles}>{children}</div>
    </div>
  );
}
