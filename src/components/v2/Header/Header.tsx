import { LinkProps } from 'next/link'
import { ReactNode } from 'react'
import { Link } from './Link'

export function MainNavLink(props: LinkProps & { children: ReactNode }) {
  const { children, ...rest } = props

  return (
    <Link
      {...rest}
      className="Nav-link block relative rounded-md overflow-clip outline-offset-2 p-4 m-1
      filter-sepia hover:bg-gray-500/50 transition-colors mix-blend-difference"
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
    <header className="Header fixed inset-x-0 backdrop-blur-sm backdrop-hue-rotate-30 border-b border-border p-5 z-40">
      <div className="max-w-3xl mx-auto flex justify-between items-center">
        {children}
      </div>
    </header>
  )
}
