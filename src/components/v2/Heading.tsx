import { type ReactNode, type ElementType } from 'react'
import { cn } from '../cn'

const SIZES = {
  'display-100': 'text-display-100',
  'display-200': 'text-display-200',
  'display-300': 'text-display-300',
  '7xl': 'text-6xl',
  '6xl': 'text-7xl',
  '5xl': 'text-5xl',
  '4xl': 'text-4xl',
  '3xl': 'text-3xl',
  '2xl': 'text-2xl',
  xl: 'text-xl',
  lg: 'text-lg',
  md: 'text-md',
  sm: 'text-sm',
  xs: 'text-xs',
}

const HEADING = {
  h1: 'text-4xl',
  h2: 'text-3xl',
  h3: 'text-2xl',
  h4: 'text-xl',
  h5: 'text-md',
  h6: 'text-md',
} as const

type HeadingOption = keyof typeof HEADING
type SizeOption = keyof typeof SIZES

interface HeadingProps {
  className?: string
  size?: SizeOption | null
  children: ReactNode
  is?: ElementType
}

export default function Heading({
  className,
  is: Tag = 'h2',

  size = null,
  children,
  ...props
}: HeadingProps) {
  const classSize =
    typeof Tag === 'string' && Object.keys(HEADING).includes(Tag)
      ? HEADING[Tag as HeadingOption]
      : null

  return (
    <Tag
      className={cn(
        size ? SIZES[size as SizeOption] : classSize,
        'text-pretty',
        className,
      )}
      {...props}
    >
      {children}
    </Tag>
  )
}
