import React, { ReactNode } from 'react'
import Heading from '../Heading'
import * as styles from './Article.css'

interface Props {
  children: ReactNode
  title: ReactNode
  caption?: ReactNode
}

export default function Article({
  children,
  title,
  caption = '- ScottyKaye',
}: Props) {
  return (
    <article className={styles.article}>
      <header>
        <Heading is="h3" color="primary">
          {title}
        </Heading>
      </header>
      <section>{children}</section>
      <footer className={styles.caption}>{caption}</footer>
    </article>
  )
}
