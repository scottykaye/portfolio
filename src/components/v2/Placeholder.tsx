import { cn } from '@components/cn'

export function Placeholder({
  rounded = false,
  className,
  is: Element = 'div',
}: {
  rounded?: boolean
  className?: string
  is?: React.ElementType
}) {
  return (
    <Element
      className={cn(
        'min-h-8 w-full animate-bg-loader rounded bg-[length:400%_400%] bg-gradient-to-bl from-surface-background-100 via-surface-background-300 to-surface-background-100',
        { 'aspect-1 rounded-full': rounded },
        className,
      )}
    />
  )
}
