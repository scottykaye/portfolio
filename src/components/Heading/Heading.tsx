import React from 'react'
import { assignInlineVars } from '@vanilla-extract/dynamic'
import * as styles from './Heading.css'
import { clsx } from 'clsx'

interface Props<T extends React.ElementType> {
  is?: T | string
  color?: 'primary' | 'default'
  fontSize?: number | string
  margin?: number | string
  classname?: string
  [rest: string]: unknown
}

function stringOrNumber(fontSize: string | number) {
  if (typeof fontSize === 'number') {
    return `${fontSize}px`
  }

  return fontSize
}

export default function Heading<T extends React.ElementType = 'h2'>({
  is = 'h2',
  color = 'default',
  fontSize = 26,
  margin,
  className,
  ...props
}: Props<T> & React.ComponentPropsWithoutRef<T>) {
  const Element = is

  return (
    <Element
      {...props}
      style={assignInlineVars({
        [styles.size]: stringOrNumber(fontSize),
        [styles.margin]: stringOrNumber(margin),
      })}
      fontSize={styles.size}
      className={clsx(styles.headingStyle[color], className)}
    />
  )
}
