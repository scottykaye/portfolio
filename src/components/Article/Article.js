import React from 'react';
// @TODO still styling
// /import { articleStyle } from './Article.css';
import Heading from '../Heading';

interface Props {
  children: React.ReactNode;
  title: string;
  caption: string;
}

export default function Article(props: Props) {
  return (
    <article>
      <header><Heading is="h3">{props.title}</Heading></header>
      <section>{props.children}</section>
      <footer>{props.caption}</footer>
    </article>
  );
}
