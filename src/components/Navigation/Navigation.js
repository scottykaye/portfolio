import React from 'react';
import Link from '../Link';
import {
  navigationStyle, navListStyle, navListItemStyle, navLinkStyle, activeStyle,
} from './Navigation.css';

export function Navigation(props) {
  return <nav className={navigationStyle}><ul className={navListStyle}>{props.children}</ul></nav>;
}

export function NavItem(props) {
  return <li className={navListItemStyle}>{props.children}</li>;
}

export function NavLink(props) {
  return <Link className={`${navLinkStyle}${props.isActive ? ` ${activeStyle}` : ''}`} {...props}>{props.children}</Link>;
}
