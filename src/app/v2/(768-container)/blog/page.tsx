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
          <>
            <Link
              className="block group [&:not(:first-child)]:border-border [&:not(:first-child)]:border-t"
              href={'/blog/' + blog.slug}
              key={blog.slug}
            >
              <div className="py-5">
                <h3 className="text-lg font-bold group-hover:underline group-hover:text-current text-primary transition-colors mb-4">
                  {blog.meta.title}
                </h3>
                <p className="mb-2">{blog.meta.description}</p>
                <p className="text-xs text-gray-400">{blog.meta.date}</p>
              </div>
            </Link>
          </>
        ))}
      </section>
    </>
  )
}
