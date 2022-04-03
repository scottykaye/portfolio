import React from 'react';
import {
  cardStyles,
  cardImageStyles,
  cardTitleStyles,
} from './Cards.css';

export default function Cards(props) {
  return (
    <div className={cardStyles}>
      <div className={cardImageStyles} />
      {/* <img className={cardImageStyles} src="https://www.placecage.com/800/600" /> */}
      <div className={cardTitleStyles}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, consequuntur rem in accusamus voluptates nesciunt</div>
    </div>
  );
}
