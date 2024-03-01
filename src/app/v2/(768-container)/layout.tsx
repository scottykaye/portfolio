import { ReactNode } from 'react'

export default function ContainerLadyout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <div className="Scroll mt-48 grid max-w-3xl mx-auto p-5">{children}</div>
  )
}
