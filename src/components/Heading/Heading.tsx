import React from 'react';
import { headingStyle } from './Heading.css';

interface Props {
  is: React.ReactElement;
  [rest: string]: unknown;
}

export default function Heading({ is: Element = 'h2', ...rest }: Props) {
  return <Element className={headingStyle} {...rest} />;
}
