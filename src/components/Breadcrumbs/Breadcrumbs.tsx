import React from "react";
import Link from "../Link";
import * as styles from "./Breadcrumbs.css";

interface Props {
  children: React.ReactNode;
}

interface ItemProps extends Props {
  href?: string;
}

function Breadcrumb({ children, href }: ItemProps) {
  const Element = href ? Link : "span";
  return (
    <li className={styles.breadcrumb}>
      <Element href={href}>{children}</Element>
    </li>
  );
}

interface BreadcrumbProps extends Props {}

export default function Breadcrumbs({ children }: BreadcrumbProps) {
  return <ul className={styles.breadcrumbs}>{children}</ul>;
}

Breadcrumbs.Breadcrumb = Breadcrumb;
