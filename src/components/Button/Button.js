import React from 'react';
import {ButtonStyles} from './Button.css';

export default function Button(props) {
  return (
    <button
      className={ButtonStyles}
      type={props.type ? props.type : 'button'}
      {...props}
    >
      {props.children}
    </button>
  );
}
