import { clsx } from 'clsx'
import type React from 'react'
import * as styles from './List.css'

import { assignInlineVars } from '@vanilla-extract/dynamic'

function stringOrNumber(fontSize: string | number) {
  if (typeof fontSize === 'number') {
    return `${fontSize}px`
  }
  return fontSize
}
interface Props {
  children: React.ReactNode
}

interface ItemProps extends Props {
  margin?: string | number
  className?: string
}

export function ListItem({ children, margin, className }: ItemProps) {
  return (
    <li
      style={{
        // spread to new object as a hack for assignInlineVars to comply with RSC
        ...assignInlineVars({
          [styles.margin]: stringOrNumber(margin),
        }),
      }}
      className={clsx(styles.listItem, className)}
    >
      {children}
    </li>
  )
}

interface ListProps extends Props {
  listStyle?: 'none' | 'default'
}

export default function List({ children, listStyle = 'default' }: ListProps) {
  return <ul className={styles.list[listStyle]}>{children}</ul>
}

List.Item = ListItem
