import { clsx } from 'clsx'
import React from 'react'

interface Props<T extends React.ElementType> {
  is?: T | string
  color?: 'primary' | 'default'
  fontSize?: 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl'
  fontFamily?: 'inherit'
  classname?: string
  [rest: string]: unknown
}

export default function Heading<T extends React.ElementType = 'h2'>({
  is = 'h2',
  color = 'default',
  fontSize,
  className,
  fontFamily,
  ...props
}: Props<T> & React.ComponentPropsWithoutRef<T>) {
  const Element = is
  return (
    <Element
      {...props}
      className={clsx(
        {
          ['text-primary']: color === 'primary',
          ['text-sm']: fontSize === 'sm',
          ['text-base']: fontSize === 'base',
          ['text-lg']: fontSize === 'lg',
          ['text-xl']: fontSize === 'xl',
          ['text-2xl']: fontSize === '2xl',
          ['text-3xl']: fontSize === '3xl',
          ['text-4xl']: fontSize === '4xl',
        },
        className,
      )}
    />
  )
}
