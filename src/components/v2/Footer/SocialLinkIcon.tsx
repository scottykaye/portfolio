'use client'
import { ReactNode } from 'react'
import { createKeyboardNavHook, KeyboardNav } from 'accessible-navigation'

const socialIcons = new KeyboardNav('horizontal')
const useKeyboardNav = createKeyboardNavHook(socialIcons)

export function SocialLinkIcon({
  href,
  openInNewWindow = false,
  viewBox = null,
  children,
  label,
}: {
  href: string
  openInNewWindow: boolean
  viewBox?: string
  label: string
  children: ReactNode
}) {
  function handleKeyDown(event) {
    socialIcons.update(event, label)
  }
  const refs = useKeyboardNav(label)

  return (
    <a
      href={href}
      aria-label={label}
      target={openInNewWindow && '_blank'}
      rel={openInNewWindow && 'noreferrer'}
      className="fill-primary outline-offset-4 transition-all hover:scale-125 focus-visible:scale-125 active:translate-y-1 [&:not(:focus,:hover)]:opacity-75"
      ref={refs}
      onKeyDown={handleKeyDown}
    >
      <svg
        fill="inherit"
        aria-hidden="true"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox={viewBox}
      >
        {children}
      </svg>
    </a>
  )
}
