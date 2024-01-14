import getSortedPostsData from '../../hooks/getSortedPostData'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'

// I thought it would be cool to have one layout for all blog posts
// It's maybe not necessary and each file can just be named by id
// Will do it this way for now
export async function getServerSideProps({ query }) {
  const posts = getSortedPostsData()
  const post = posts.find((post) => post.id.includes(query.slug))

  const source = await serialize(post.source)

  return { props: source }
}

const components = {}

export default function BlogPost(props) {
  return <MDXRemote {...props} components={components} />
}
