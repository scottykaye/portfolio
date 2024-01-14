import Link from '../components/Link'
import Heading from '../components/Heading'
import Card from '../components/Card'
import Article from '../components/Article'
import getSortedPostsData from '../hooks/getSortedPostData'

export async function getServerSideProps() {
  const posts = getSortedPostsData()

  return { props: { posts } }
}

export default function Home(props) {
  return (
    <>
      <header>
        <Heading>{`Hi, I'm Scott`} &#128075;</Heading>
        {`I'm a Frontend Software Engineer at`}{' '}
        <Link href="http://wayfair.com/" target="_blank" rel="noreferrer">
          Wayfair
        </Link>{' '}
        where I work on the Frontend Platform Team.
      </header>
      {props.posts.map((post) => {
        return (
          <Card is="a" href={post.url} key={post.title}>
            <Article title={post.title}>
              <p>{post.description}</p>
              {post.date}
            </Article>
          </Card>
        )
      })}
    </>
  )
}
