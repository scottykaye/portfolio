import React from 'react'
import * as styles from './LinkStyles.css'
import NextLink from 'next/link'

interface Props {
  children: React.ReactNode
  href: string
  isActive?: boolean
  [rest: string]: unknown
}

export default function Link({
  children,
  href,
  isActive = false,
  onClick,
  isNextLink,
  ...rest
}: Props) {
  return (
    <NextLink
      href={href}
      className="underline underline-offset-2 text-primary [&:is(:focus,:hover)]:no-underline"
      {...rest}
    >
      {children}
    </NextLink>
  )
}
