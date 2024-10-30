import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Heading from '@components/v2/Heading'
import Link from '@root/src/components/Link'
import { MDXRemote } from 'next-mdx-remote/rsc'
import Image from 'next/image'
import { Code, type Extension } from 'bright'

Code.theme = {
  dark: 'github-dark',
  light: 'github-light',
  lightSelector: 'html.light',
  darkSelector: 'html.dark',
}

const focus: Extension = {
  name: "focus",
  MultilineAnnotation: ({ children }) => (
    <div style={{ filter: "contrast(0.1)" }}>{children}</div>
  ),
  beforeHighlight: (props, focusAnnotations) => {
    if (focusAnnotations.length === 0) return props

    const lineCount = props.code.split("\n").length

    const ranges = focusAnnotations.flatMap((a) => a.ranges)

    let newRanges = [{ fromLineNumber: 1, toLineNumber: lineCount }]

    for (const range of ranges) {
      const { fromLineNumber, toLineNumber } = range
      newRanges = newRanges.flatMap((r) => {
        if (
          r.fromLineNumber > toLineNumber ||
          r.toLineNumber < fromLineNumber
        )
          return [r]
        if (
          r.fromLineNumber >= fromLineNumber &&
          r.toLineNumber <= toLineNumber
        )
          return []
        if (
          r.fromLineNumber < fromLineNumber &&
          r.toLineNumber > toLineNumber
        )
          return [
            {
              fromLineNumber: r.fromLineNumber,
              toLineNumber: fromLineNumber - 1,
            },
            {
              fromLineNumber: toLineNumber + 1,
              toLineNumber: r.toLineNumber,
            },
          ]
        if (r.fromLineNumber < fromLineNumber)
          return [
            {
              fromLineNumber: r.fromLineNumber,
              toLineNumber: fromLineNumber - 1,
            },
          ]
        if (r.toLineNumber > toLineNumber)
          return [
            {
              fromLineNumber: toLineNumber + 1,
              toLineNumber: r.toLineNumber,
            },
          ]
      })
    }

    const newAnnotations = props.annotations.filter(
      (a) => a.name !== "focus"
    )
    newAnnotations.push({
      name: "focus",
      ranges: newRanges,
    })
    return { ...props, annotations: newAnnotations }
  },
}

Code.extensions = [focus]

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}) {
  const props = getPost(params)

  return {
    title: {
      default: 'Scotty Kaye',
      template: '%s | Scotty Kaye',
    },
    description: props.frontMatter.description,
    openGraph: {
      title: `${props.frontMatter.title} | Scotty Kaye`,
      description: props.frontMatter.description,
      url: 'https://scottykaye.com',
      siteName: 'Scotty Kaye',
      type: 'website',
      locale: 'en_US',
      images: [
        props.frontMatter.image
          ? {
              url: props.frontMatter.image,
              alt: 'Scotty Kaye | Staff Software Engineer',
              width: props.frontMatter.width ? props.frontMatter.width : 800,
              height: props.frontMatter.height ? props.frontMatter.height : 400,
            }
          : {
              url: '/images/scottykaye-bg.jpg',
              width: 5472,
              height: 3648,
              alt: 'Scotty Kaye | Staff Software Engineer',
            },
      ],
    },
    twitter: {
      site: '@scottykaye',
      card: 'summary_large_image',
      creator: '@scottykaye',
      images: [
        props.frontMatter.image
          ? {
              url: props.frontMatter.image,
              alt: 'Scotty Kaye | Staff Software Engineer',
              width: props.frontMatter.width ? props.frontMatter.width : 800,
              height: props.frontMatter.height ? props.frontMatter.height : 400,
            }
          : {
              url: '/images/icons/scottykaye-twitter.png',
              width: 600,
              height: 314,
              alt: 'Scotty Kaye | Staff Software Engineer',
            },
      ],
    },
  }
}

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
  ul: (props) => <ul className="my-5" {...props} />,
  li: (props) => <li className="mb-2" {...props} />,
  h1: (props) => (
    <Heading className="mb-5" color="primary" is="h1" {...props} />
  ),
  a: (props) => <Link target="_blank" {...props} />,
  h2: (props) => <Heading className="mt-10 mb-5" {...props} />,
  h3: (props) => <Heading className="mt-10 mb-5" is="h3" {...props} />,
  h4: (props) => <Heading className="mt-10 mb-5" is="h4" {...props} />,
  h5: (props) => <Heading className="mt-10 mb-5" is="h5" {...props} />,
  h6: (props) => <Heading className="mt-10 mb-5" is="h6" {...props} />,
  p: (props) => <p className="mb-5" {...props} />,
  pre: (props) => <Code className="scrollbar" lang="jsx" {...props} />,
}

export default function Post({ params }: { params: { slug: string } }) {
  const props = getPost(params)

  return (
    <article>
      <Image
        src={props.frontMatter.image}
        width={props.frontMatter.width}
        height={props.frontMatter.height}
        alt={props.frontMatter.title}
        className="mb-10"
      />

      <Heading is="h1" className="mb-5">
        {props.frontMatter.title}
      </Heading>

      <MDXRemote source={props.content} components={components} />
    </article>
  )
}
