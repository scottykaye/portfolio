import React from 'react';
import { articleStyle } from './Article.css';

export default function Article(props) {
  return (
    <article>
      <header>{props.title}</header>
      <section>{props.children}</section>
      <footer>{props.caption}</footer>
    </article>
  );
}
