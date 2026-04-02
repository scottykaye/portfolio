import React from 'react'
import cx from 'clsx'
import Link from '../Link'
import * as styles from './Navigation.css'

interface Props {
  children: React.ReactNode
}
interface NavLinkProps extends Props {
  isActive?: boolean
  href: string
}

export function Navigation(props: Props) {
  return (
    <nav className={styles.navigationStyle}>
      <ul className={styles.navListStyle}>{props.children}</ul>
    </nav>
  )
}

export function NavItem(props: Props) {
  return <li className={styles.navListItemStyle}>{props.children}</li>
}

export function NavLink(props: NavLinkProps) {
  return (
    <Link
      className={cx(styles.navLinkStyle, {
        [styles.activeStyle]: props.isActive,
      })}
      aria-current={props.isActive ? 'page' : null}
      {...props}
    >
      {props.children}
    </Link>
  )
}
