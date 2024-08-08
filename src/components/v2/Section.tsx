import Heading from '@components/v2/Heading'
import { clsx } from 'clsx'
import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'

interface Props<T extends ElementType> {
  is?: T | string
  children?: ReactNode
  heading?: ReactNode
  className?: string
  headingIs?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

export default function Section<T extends ElementType = 'section'>({
  is = 'section',
  children,
  heading,
  className = undefined,
  headingIs,
}: Props<T> & ComponentPropsWithoutRef<T>) {
  const Element = is

  return (
    <Element
      className={clsx(
        'relative border-2 border-solid border-t-0 border-primary my-2 print:border-black font-sm',
        {
          [className]: className,
        },
      )}
    >
      <div className="absolute overflow-clip -top-[1.8rem] w-[calc(100%+2px*2)] -left-[2px]">
        {heading && (
          <Heading
            is={headingIs}
            fontSize="base"
            className="relative text-foreground inline-block p-4 ml-4 before:absolute -before:translate-x-1/2 before:top-1/2 before:w-[100vw] before:border-t-2 before:border-solid before:border-primary print:before:border-black before:right-full after:absolute -after:translate-x-1/2 after:top-1/2 after:w-[100vw] after:border-t-2 after:border-solid after:border-primary print:after:border-black after:left-full"
          >
            {heading}
          </Heading>
        )}
      </div>
      <div className="p-5">{children}</div>
    </Element>
  )
}
