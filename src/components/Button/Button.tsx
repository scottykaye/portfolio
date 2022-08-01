import React from 'react';
import { ButtonStyles } from './Button.css';

type BtnType = 'submit' | 'button'

interface Props {
  children: React.ReactNode;
  type: BtnType;
  [props: string]: unknown;
}

export default function Button({ children, type = 'button', ...props }: Props) {
  return (
    <button
      className={ButtonStyles}
      type={type}
      {...props}
    >
      {children}
    </button>
  );
}
