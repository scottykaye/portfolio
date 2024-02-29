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
    ref: ReactNode
  },
  ref: ReactNode,
) {
  const { children, className, ...rest } = props
  const pathname = usePathname()

  return (
    <a
      {...rest}
      className={clsx(className ?? '', {
        isActive: pathname === rest.href,
      })}
      ref={ref}
    >
      {children}
    </a>
  )
})

const navLinks = new KeyboardNav('horizontal')
const useKeyboardNav = createKeyboardNavHook(navLinks)

export function MainNavLink(props: LinkProps & { children: ReactNode }) {
  const { children, ...rest } = props
  function handleKeyDown(event) {
    navLinks.update(event, children)
  }
  const refs = useKeyboardNav(children)

  return (
    <NextLink passHref legacyBehavior href={rest.href}>
      <CustomLink
        {...rest}
        className="Nav-link block relative rounded-md overflow-clip outline-offset-4 p-4 m-1
      filter-sepia hover:bg-gray-500/50 transition-colors mix-blend-difference"
        ref={refs}
        onKeyDown={handleKeyDown}
      >
        {children}
      </CustomLink>
    </NextLink>
  )
}
