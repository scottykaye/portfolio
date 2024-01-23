import React from 'react'
import * as styles from './Card.css'

interface Props<T> {
  children: React.ReactNode
  is?: T
  // I don't want this here long term, had issues with extending HTMLAnchorLink appropriately with generics.
  href?: string
}

export default function Card<T extends React.ElementType = 'div'>({
  children,
  is,
  ...rest
}: Props<T>) {
  const Element = is ?? 'div'

  return (
    <Element className={styles.card} {...rest}>
      {children}
    </Element>
  )
}
