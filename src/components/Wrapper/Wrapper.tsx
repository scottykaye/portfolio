import React from 'react';
import { wrapperStyles } from './Wrapper.css';

interface Props {
  children: React.ReactNode
}
export default function Wrapper({ children }: Props) {
  return <div className={wrapperStyles}>{children}</div>;
}
