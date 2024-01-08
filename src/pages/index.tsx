import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Link from '../components/Link'
import Heading from '../components/Heading'
import Card from '../components/Card'
import Article from '../components/Article'

const blogDirectory = path.join(process.cwd(), 'src/blog')

function getSortedPostsData() {
  const fileNames = fs.readdirSync(blogDirectory)
  const allPostsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.mdx$/, '')

    // Read markdown file as string
    const fullPath = path.join(blogDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)
    // Combine the data with the id
    //
    return {
      id,
      date: null,
      ...matterResult.data,
    }
  })

  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}

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
          <Card is="a" href={post.id} key={post.title}>
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
