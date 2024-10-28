import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import List, { ListItem } from '@components/List'
import Heading from '@components/v2/Heading'
import Link from '@root/src/components/Link'
import { MDXRemote } from 'next-mdx-remote/rsc'
import Image from 'next/image'

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
            }
          : {
              url: '/images/scottykaye-bg.jpg',
              width: 5472,
              height: 3648,
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
  List,
  ListItem,
  h1: (props) => (
    <Heading className="mb-5" color="primary" is="h1" {...props} />
  ),
  h2: (props) => <Heading className="mb-5" {...props} />,
  h3: (props) => <Heading className="mb-5" is="h3" {...props} />,
  h4: (props) => <Heading className="mb-5" is="h4" {...props} />,
  h5: (props) => <Heading className="mb-5" is="h5" {...props} />,
  h6: (props) => <Heading className="mb-5" is="h6" {...props} />,
  p: (props) => <p className="mb-5" {...props} />,
  a: (props) => <Link {...props} />,
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
