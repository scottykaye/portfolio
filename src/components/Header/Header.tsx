import React from 'react'
import Wrapper from '../Wrapper'
import * as styles from './Header.css'

interface Props {
  children: React.ReactNode
}

export default function Header(props: Props) {
  return (
    <header className={styles.header} {...props}>
      <Wrapper>
        <div className={styles.innerHeader}>{props.children}</div>
      </Wrapper>
    </header>
  )
}
