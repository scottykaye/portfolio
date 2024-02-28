import { ReactNode } from 'react'

export function SocialLinkIcon({
  href,
  openInNewWindow = false,
  viewBox = null,
  children,
  label,
}: {
  href: string
  openInNewWindow: boolean
  path: ReactNode
  viewBox?: null | string
  label: string
}) {
  return (
    <a
      href={href}
      aria-label={label}
      viewBox={viewBox}
      target={openInNewWindow && '_blank'}
      rel={openInNewWindow && 'noreferrer'}
      className="fill-primary outline-offset-4 transition-all hover:scale-125 focus:scale-125 [&:not(:focus,:hover)]:opacity-75"
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

export function Footer({ children }: { children: ReactNode }) {
  return (
    <footer className="border-t border-border backdrop-hue-rotate-30">
      <ul className="py-10 px-5 max-w-3xl mx-auto flex justify-between">
        {children}
      </ul>
    </footer>
  )
}
