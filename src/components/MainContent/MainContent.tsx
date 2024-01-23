import React from 'react'
import { mainContentStyle } from './MainContent.css'
import Wrapper from '../Wrapper'
import { clsx } from 'clsx'

interface Props {
  children: React.ReactNode
  id?: string
  className?: string
}

export default function MainContent({ children, id, className }: Props) {
  return (
    <main className={clsx(mainContentStyle, className)} id={id}>
      <Wrapper>{children}</Wrapper>
    </main>
  )
}
