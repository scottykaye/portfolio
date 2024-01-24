import React from 'react'
import { mainContent } from './MainContent.css'
import Wrapper from '../Wrapper'
import { clsx } from 'clsx'

declare type Styles = {
  [cssVarName: string]: string
}

interface Props {
  children: React.ReactNode
  id?: string
  className?: string
  style?: Styles
}

export default function MainContent({ children, id, className, style }: Props) {
  return (
    <main className={clsx(mainContent, className)} style={style} id={id}>
      <Wrapper>{children}</Wrapper>
    </main>
  )
}
