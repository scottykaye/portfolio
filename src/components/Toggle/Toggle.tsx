import React from 'react';

import * as styles from './Toggle.css';

interface Props {
  // 'currentTheme' is initially returning as unknown
  // label?: unknown;
  label?: string;
  showLabel?: boolean;
  [rest : string]: unknown;
}

// Currently don't support the label
// Probably should rethink a wrapping implicit label as well
export default function Toggle({ label = null, showLabel = false, ...rest }: Props) {
  return (
    <label className={styles.toggleStyle} htmlFor={label?.split(' ').join('-')} aria-label={!showLabel && label}>
      <input id={label?.split(' ').join('-')} className={styles.checkStyles} type="checkbox" {...rest} />
      <span>{showLabel && label}</span>
    </label>
  );
}
