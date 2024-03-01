import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

import Link from 'next/link'
export default function Blog() {
  // 1) Set blogs directory
  const blogDir = 'src/blog'

  // 2) Find all files in the blog directory
  const files = fs.readdirSync(path.join(blogDir))

  // 3) For each blog found
  const blogs = files.map((filename) => {
    // 4) Read the content of that blog
    const fileContent = fs.readFileSync(path.join(blogDir, filename), 'utf-8')

    // 5) Extract the metadata from the blog's content
    const { data: frontMatter } = matter(fileContent)

    // 6) Return the metadata and page slug
    return {
      meta: frontMatter,
      slug: filename.replace('.mdx', ''),
    }
  })

  return (
    <>
      <h1 className="text-3xl font-bold text-primary">Thoughts</h1>
      <section className="py-5">
        {blogs.map((blog) => (
          <Link
            className="mb-5"
            href={'/blog/' + blog.slug}
            passHref
            key={blog.slug}
          >
            <div className="py-2">
              <h3 className="text-lg font-bold">{blog.meta.title}</h3>
              <p>{blog.meta.description}</p>
              <p className="mt-2 text-xs text-gray-400">{blog.meta.date}</p>
            </div>
          </Link>
        ))}
      </section>
    </>
  )
}
