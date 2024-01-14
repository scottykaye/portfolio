import React from 'react'
import { mainContentStyle } from './MainContent.css'
import Wrapper from '../Wrapper'

interface Props {
  children: React.ReactNode
  id?: string
}

export default function MainContent({ children, id }: Props) {
  return (
    <main className={mainContentStyle} id={id}>
      <Wrapper>{children}</Wrapper>
    </main>
  )
}
