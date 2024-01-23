import React, { ReactNode } from 'react'
import Heading from '../Heading'
import * as styles from './Article.css'

interface Props {
  children: ReactNode
  title: ReactNode
  caption?: ReactNode
  date?: string
}

export default function Article({
  children,
  title,
  date,
  caption = '- ScottyKaye',
}: Props) {
  return (
    <article className={styles.article}>
      <header className={styles.header}>
        <Heading className={styles.heading} is="h3" color="primary">
          {title}
        </Heading>
      </header>
      <section className={styles.description}>{children}</section>
      {date}
      {/* <footer className={styles.caption}>{caption}</footer> */}
    </article>
  )
}
