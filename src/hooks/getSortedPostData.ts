import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const blogDirectory = path.join(process.cwd(), 'src/blog')

export default function getSortedPostsData() {
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

    const {
      content: mdx,
      data,
      data: { description, date, title },
    } = matterResult

    return {
      id,
      date,
      title,
      description,
      url: `blog/${id}`,
      source: mdx,
      frontMatter: data,
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
