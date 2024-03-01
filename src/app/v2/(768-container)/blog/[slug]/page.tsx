import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
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

export default function Post({ params }: any) {
  const props = getPost(params)

  return (
    <article className="prose prose-sm md:prose-base lg:prose-lg prose-slate !prose-invert mx-auto">
      <h1>{props.frontMatter.title}</h1>

      {/* @ts-expect-error Server Component*/}
      <MDXRemote source={props.content} />
    </article>
  )
}
