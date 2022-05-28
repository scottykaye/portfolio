import React from 'react';
import { mainContentStyle } from './MainContent.css';
import Wrapper from '../Wrapper';

interface Props {
  children: React.ReactNode;
}

export default function MainContent({ children }: Props) {
  return <main className={mainContentStyle}><Wrapper>{children}</Wrapper></main>;
}
