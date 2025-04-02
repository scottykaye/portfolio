import type { ReactNode } from 'react'

export default function ContainerLayout({ children }: { children: ReactNode }) {
  return (
    <div className="Scroll grid grid-cols-1 mt-28 max-w-7xl mx-auto p-5 print:mt-0">
      {children}
    </div>
  )
}
