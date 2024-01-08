import { MDXProvider } from '@mdx-js/react'
import { useRouter } from 'next/router'
import getSortedPostsData from '../../hooks/getSortedPostData'

export async function getServerSideProps() {
  const posts = getSortedPostsData()
  return { props: { data: posts } }
}

// This works and its cool but its wild.
// Might as well put the posts inside the src/pages/blog section
// Then let Next just do the routing by matching the file name to the slug path
// This is cool but its super magical

export default function BlogPost(props) {
  const router = useRouter()

  const post = props.data.find((post) => post.id.includes(router.query.slug))

  return <MDXProvider>{post.content}</MDXProvider>
}
