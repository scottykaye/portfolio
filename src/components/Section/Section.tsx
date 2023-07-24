import { ReactNode, ElementType, ComponentPropsWithoutRef } from 'react';
import * as styles from './Section.css';
import Heading from '../Heading';
import cx from 'classnames';

interface Props<T extends ElementType> {
  is?: T | string;
  children?: ReactNode;
  heading?: ReactNode;
  className?: string;
}

export default function Section<T extends ElementType = 'section'>({
  is = 'section',
  children,
  heading,
  className = undefined,
}: Props<T> & ComponentPropsWithoutRef<T>) {
  const Element = is;

  console.log(className);
  return (
    <Element
      className={cx(styles.section, {
        [className]: className,
      })}
    >
      <div className={styles.heading}>
        {heading && (
          <Heading is="h2" fontSize={14}>
            {heading}
          </Heading>
        )}
      </div>
      {children}
    </Element>
  );
}
