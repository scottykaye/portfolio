'use client'
import clsx from 'clsx'
import { ReactNode } from 'react'
import { usePathname } from 'next/navigation'
import NextLink, { LinkProps } from 'next/link'

export function Link(
  props: LinkProps & { children: ReactNode; className?: string },
) {
  const { children, className, ...rest } = props
  const pathname = usePathname()

  return (
    <NextLink
      {...rest}
      className={clsx(className ?? '', {
        isActive: pathname === rest.href,
      })}
    >
      {children}
    </NextLink>
  )
}
