'use client'
import clsx from 'clsx'
import { type ReactNode, type HTMLAttributes, type KeyboardEvent } from 'react'
import { usePathname } from 'next/navigation'
import NextLink, { LinkProps } from 'next/link'
import { createKeyboardNavHook, KeyboardNav } from 'accessible-navigation'
import { cn } from '../../cn'

/**
 * This was a NextLink that just handles pathname
 * With my hook, a ref required a custom child element
 *
 * This will be useful for other links!
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
*/

/**
 * Because we can't use a ref on a Next Link, we ave to create a custom child
 * This allows us to use the accessibility hook
 */
interface CustomLinkProps extends LinkProps, HTMLAttributes<HTMLAnchorElement> {
  children: ReactNode
  className?: string
  onKeyDown?: (event: KeyboardEvent<HTMLAnchorElement>) => void
  ref: (node: HTMLElement) => void
  as?: any
}
const CustomLink = function Link(props: CustomLinkProps) {
  const { children, className, as, ref, ...rest } = props
  const pathname = usePathname()

  const Element = as ?? 'a'

  return (
    <Element
      {...rest}
      href={rest.href as string}
      className={clsx(className ?? '', {
        isActive: pathname === rest.href,
      })}
      ref={ref}
    >
      {children}
    </Element>
  )
}

const navLinks = new KeyboardNav('horizontal')
const useKeyboardNav = createKeyboardNavHook(navLinks)

interface MainNavProps extends LinkProps, HTMLAttributes<HTMLAnchorElement> {
  children: ReactNode
  target?: string
  className?: string
}

export function MainNavLink(props: MainNavProps) {
  const { children, className, ...rest } = props
  function handleKeyDown(event) {
    navLinks.update(event, rest.href.toString())
  }
  const refs = useKeyboardNav(rest.href.toString())

  return (
    <CustomLink
      as={NextLink}
      {...rest}
      className={cn(
        'Nav-link block relative rounded-md overflow-clip outline-offset-4 p-4 m-1 [&:is(:hover,:focus-visible)]:bg-gray-500/50 transition-all mix-blend-difference active:translate-y-1',
        className,
      )}
      ref={refs}
      onKeyDown={handleKeyDown}
    >
      {children}
    </CustomLink>
  )
}
