import Link, { LinkProps } from 'next/link'
import { ReactNode } from 'react'

export function MainNavLink(props: LinkProps & { children: ReactNode }) {
  const { children, ...rest } = props

  return (
    <Link
      {...rest}
      className="Nav-link block relative overflow-clip outline-offset-2 p-5 mix-blend-difference transition-colors hover:text-black hover:bg-primary-opaque"
    >
      {children}
    </Link>
  )
}

export function MainNav({ children }: { children: ReactNode }) {
  return (
    <nav>
      <ul className="Nav-list list-none p-0 m-0 flex">{children}</ul>
    </nav>
  )
}

export function Header({ children }: { children: ReactNode }) {
  return (
    <header className="Header sticky top-0 backdrop-blur-sm backdrop-hue-rotate-30 border-b border-border p-5 z-40 bg-blend-overlay">
      <div className="max-w-3xl mx-auto flex justify-between items-center">
        {children}
      </div>
    </header>
  )
}
