import React from 'react';
import { articleStyle } from './Article.css';
import Heading from '/components/Heading';

export default function Article(props) {
  return (
    <article>
      <header><Heading is="h3">{props.title}</Heading></header>
      <section>{props.children}</section>
      <footer>{props.caption}</footer>
    </article>
  );
}
