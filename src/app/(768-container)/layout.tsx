import { ReactNode } from 'react'

export default function ContainerLayout({ children }: { children: ReactNode }) {
  return (
    <div className="Scroll grid grid-cols-1 max-w-3xl mx-auto p-5 mt-28">
      {children}
    </div>
  )
}
