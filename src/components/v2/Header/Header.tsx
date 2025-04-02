import { clsx } from 'clsx'
import { ReactNode } from 'react'

export function MainNav({ children }: { children: ReactNode }) {
  return (
    <nav>
      <ul className="Nav-list list-none p-0 m-0 flex">{children}</ul>
    </nav>
  )
}

export function Header({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <header
      className={clsx(
        'Header bg-background/50 dark:bg-background/30 fixed inset-x-0 backdrop-blur-xs backdrop-hue-rotate-30 border-b border-border p-5 z-40',
        className,
      )}
    >
      <div className="max-w-3xl mx-auto flex justify-between items-center">
        {children}
      </div>
    </header>
  )
}
