import React from 'react';
import cx from 'classnames';
import { buttonStyles, fullWidth } from './Button.css';

type BtnType = 'submit' | 'button'

interface Props {
  children: React.ReactNode;
  type: BtnType;
  isFullWidth: boolean;
  [props: string]: unknown;
}

const Button = React.forwardRef<HTMLInputElement, Props>(({
  isFullWidth, children, type = 'button', ...props
}, ref) => (
  <button
    className={cx(buttonStyles, {
      [fullWidth]: isFullWidth,
    })}
    type={type}
    ref={ref}
    {...props}
  >
    {children}
  </button>
));

export default Button;
