import { ReactNode } from 'react'

export default function ContainerLadyout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <div className="Scroll mt-48 print:mt-28 grid max-w-7xl mx-auto p-5">
      {children}
    </div>
  )
}
