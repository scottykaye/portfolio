import Head from 'next/head'
import Heading from '../components/Heading'
import Card from '../components/Card'
import Article from '../components/Article'
import AutoGrid from '../components/AutoGrid'
import getSortedPostsData from '../hooks/getSortedPostData'
import * as styles from '../home/Home.css'

export async function getServerSideProps() {
  const posts = getSortedPostsData()

  return { props: { posts } }
}

export default function Home(props) {
  return (
    <>
      <Head>
        <title>Scotty Kaye</title>
        <meta
          name="description"
          content="Scotty Kaye is a Frontend Software Engineer located in Boston, Massachusetts with a strong background in UI, React, Accessibility and Next.js"
        />
      </Head>
      <header>
        <Heading>{`Hi, I'm Scott`} &#128075;</Heading>
        <p>
          {`I'm a Staff Frontend Software Engineer with experience on Frontend Platform teams and Design Systems.`}
        </p>
      </header>
      <div className={styles.home}>
        <AutoGrid>
          {props.posts.map((post) => (
            <Card is="a" href={post.url} key={post.title}>
              <Article title={post.title} date={post.date}>
                <p>{post.description}</p>
              </Article>
            </Card>
          ))}
        </AutoGrid>
      </div>
    </>
  )
}
