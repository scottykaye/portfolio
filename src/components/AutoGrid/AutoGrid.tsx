import React from 'react'
import clsx from 'clsx'
import * as styles from './AutoGrid.css'

interface Props {
  children: React.ReactNode
  alignItems?: 'flexStart' | 'default' | 'center'
  className?: string
}

export default function AutoGrid({
  children,
  alignItems = 'default',
  className,
}: Props) {
  return (
    <div className={clsx(styles.autoGrid[alignItems], className)}>
      {children}
    </div>
  )
}
