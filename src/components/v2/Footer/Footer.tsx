import { ReactNode } from 'react'

export function Footer({ children }: { children: ReactNode }) {
  return (
    <footer className="border-t border-border backdrop-hue-rotate-30 print:hidden mt-48">
      <ul className="[&:has(:is(:hover,:focus))_a]:opacity-50 [&_a:is(:hover,:focus)]:opacity-100 py-10 px-5 max-w-3xl mx-auto flex justify-between items-center gap-2">
        {children}
      </ul>
    </footer>
  )
}
