import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import List, { ListItem } from '@components/List'
import Heading from '@components/Heading'
import { MDXRemote } from 'next-mdx-remote/rsc'

export async function generateStaticParams() {
  const files = fs.readdirSync(path.join('src/blog'))

  const paths = files.map((filename) => ({
    slug: filename.replace('.mdx', ''),
  }))

  return paths
}

function getPost({ slug }: { slug: string }) {
  const markdownFile = fs.readFileSync(
    path.join('src/blog', slug + '.mdx'),
    'utf-8',
  )

  const { data: frontMatter, content } = matter(markdownFile)

  return {
    frontMatter,
    slug,
    content,
  }
}

const components = {
  List,
  ListItem,
  h1: (props) => <Heading color="primary" is="h1" {...props} />,
  h2: Heading,
  h3: (props) => <Heading is="h3" {...props} />,
  h4: (props) => <Heading is="h4" {...props} />,
  h5: (props) => <Heading is="h5" {...props} />,
  h6: (props) => <Heading is="h6" {...props} />,
  p: (props) => <p className="mb-5" {...props} />,
}

export default function Post({ params }: any) {
  const props = getPost(params)

  return (
    <article>
      <Heading margin="0 0 10px" fontFamily="inherit" color="primary" is="h1">
        {props.frontMatter.title}
      </Heading>

      {/* @ts-expect-error Server Component*/}
      <MDXRemote source={props.content} components={components} />
    </article>
  )
}
