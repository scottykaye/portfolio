import React from 'react';
import { headingStyle } from './Heading.css';

export default function Heading({ is: Element = 'h2', ...rest }) {
  return <Element className={headingStyle} {...rest} />;
}
