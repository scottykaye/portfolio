import React from 'react'
import { clsx } from 'clsx'

interface Props<T extends React.ElementType> {
  is?: T | string
  color?: 'primary' | 'default'
  fontSize?: 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl'
  fontFamily?: 'inherit'
  classname?: string
  [rest: string]: unknown
}

export default function Heading<T extends React.ElementType = 'h2'>({
  is = 'h2',
  color = 'default',
  fontSize = '2xl',
  className,
  fontFamily,
  ...props
}: Props<T> & React.ComponentPropsWithoutRef<T>) {
  const Element = is
  return (
    <Element
      {...props}
      className={clsx(className, {
        ['text-primary']: color === 'primary',
        ['text-base']: fontSize === 'base',
        ['text-lg']: fontSize === 'lg',
        ['text-xl']: fontSize === 'xl',
        ['text-2xl']: fontSize === '2xl',
        ['text-3xl']: fontSize === '3xl',
        ['text-4xl']: fontSize === '4xl',
      })}
    />
  )
}
