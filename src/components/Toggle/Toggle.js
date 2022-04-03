import React from 'react';
import { toggleStyle, labelStyles, checkStyles } from './Toggle.css';

// Currently don't support the label
// Probably should rethink a wrapping implicit label as well
export default function Toggle({ label = null, showLabel = false, ...rest }) {
  return (
    <label className={toggleStyle} htmlFor={label?.split(' ').join('-')} aria-label={!showLabel && label}>
      <input id={label?.split(' ').join('-')} className={checkStyles} type="checkbox" {...rest} />
      <span className={labelStyles}>{showLabel && label}</span>
    </label>
  );
}
