'use client'
import clsx from 'clsx'
import { ReactNode, forwardRef } from 'react'
import { usePathname } from 'next/navigation'
import NextLink, { LinkProps } from 'next/link'
import { createKeyboardNavHook, KeyboardNav } from 'accessible-navigation'

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
const CustomLink = forwardRef(function Link(
  props: LinkProps & {
    children: ReactNode
    className?: string
    onKeyDown?: (event) => void
    ref: ReactNode
    as?: any
  },
  ref,
) {
  const { children, className, as, ...rest } = props
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
})

const navLinks = new KeyboardNav('horizontal')
const useKeyboardNav = createKeyboardNavHook(navLinks)

export function MainNavLink(props: LinkProps & { children: ReactNode }) {
  const { children, ...rest } = props
  function handleKeyDown(event) {
    navLinks.update(event, rest.href.toString())
  }
  const refs = useKeyboardNav(rest.href.toString())
  return (
    <CustomLink
      as={NextLink}
      {...rest}
      className="Nav-link block relative rounded-md overflow-clip outline-offset-4 p-4 m-1 [&:is(:hover, :focus-visible)]:bg-gray-500/50 transition-all mix-blend-difference active:translate-y-1"
      ref={refs}
      onKeyDown={handleKeyDown}
    >
      {children}
    </CustomLink>
  )
}
