import React from 'react'
import { autoGrid } from './AutoGrid.css'

interface Props {
  children: React.ReactNode
  alignItems?: 'flexStart' | 'default' | 'center'
}

export default function AutoGrid({ children, alignItems = 'default' }: Props) {
  return <div className={autoGrid[alignItems]}>{children}</div>
}
