import React, { ReactNode } from 'react';
import Heading from '../Heading';

interface Props {
  children: ReactNode;
  title: ReactNode;
  caption?: ReactNode;
}

export default function Article({
  children,
  title,
  caption = 'By ScottyKaye',
}: Props) {
  return (
    <article>
      <header>
        <Heading is="h3" color="primary">
          {title}
        </Heading>
      </header>
      <section>{children}</section>
      <footer>{caption}</footer>
    </article>
  );
}
