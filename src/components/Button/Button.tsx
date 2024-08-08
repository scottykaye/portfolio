import React from 'react'
import cx from 'clsx'
import { buttonStyles, fullWidth } from './Button.css'

type BtnType = 'submit' | 'button'

interface Props {
  children: React.ReactNode
  type: BtnType
  isFullWidth: boolean
  [props: string]: unknown
}

const Button = React.forwardRef<HTMLButtonElement, Props>(
  function ButtonElement(
    { isFullWidth, children, type = 'button', ...props },
    ref,
  ) {
    return (
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
    )
  },
)

export default Button
