import React from 'react';
import { useRouter } from 'next/router';
import { linkStyles } from './LinkStyles.css';

interface Props {
  children: React.ReactNode;
  href: string;
  isActive: boolean;
  [rest: string]: unknown;
}

export default function Link({
  children, href, isActive, ...rest
}: Props) {
  const router = useRouter();

  function handleClick(e) {
    e.preventDefault();
    router.push(href);
  }

  return (
    <a href={href} onClick={handleClick} className={linkStyles} {...rest}>
      {children}
    </a>
  );
}
