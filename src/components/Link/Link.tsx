import React from 'react';
import { useRouter } from 'next/router';
import { linkStyles } from './LinkStyles.css';

interface Props {
  children: React.ReactNode;
  href: string;
  isActive?: boolean;
  [rest: string]: unknown;
}

export default function Link({
  children,
  href,
  isActive = false,
  onClick,
  isNextLink,
  ...rest
}: Props) {
  const router = useRouter();

  function handleClick(e) {
    e.preventDefault();
    router.push(href);
  }

  return (
    <a
      href={href}
      onClick={isNextLink && handleClick}
      className={linkStyles}
      {...rest}
    >
      {children}
    </a>
  );
}
