import Head from 'next/head'
import getSortedPostsData from '../../hooks/getSortedPostData'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'

// I thought it would be cool to have one layout for all blog posts
// It's maybe not necessary and each file can just be named by id
// Will do it this way for now
export async function getServerSideProps({ req, query }) {
  const posts = getSortedPostsData()
  const post = posts.find((post) => post.id.includes(query.slug))

  const source = await serialize(post.source)

  return { props: { source, url: req.url } }
}

const components = {}

// Can use format from _app we just gotta move it into a utils
function formatPageName(route) {
  return `${route.charAt(0).toUpperCase()}${route.slice(1)}`
}

export default function BlogPost(props) {
  const url = props.url.split('/')
  const pageName = formatPageName(url[url.length - 1])

  return (
    <>
      <Head>
        <title>Scotty Kaye - {pageName}</title>
      </Head>
      <MDXRemote {...props.source} components={components} />
    </>
  )
}
