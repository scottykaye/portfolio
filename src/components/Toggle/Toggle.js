import React from 'react';
import { toggleStyle, labelStyles, checkStyles } from './Toggle.css';

export default function Toggle({ label = null, showLabel = false, ...rest }) {
  return (
    <label className={toggleStyle} htmlFor={label?.split(' ').join('-')} ariaLabel={!showLabel && label}>
      <input id={label?.split(' ').join('-')} className={checkStyles} type="checkbox" {...rest} />
      <span className={labelStyles}>{showLabel && label}</span>
    </label>
  );
}
