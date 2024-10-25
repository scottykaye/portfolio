import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

import Link from 'next/link'

export default function Blog() {
  const blogDir = 'src/blog'

  const files = fs.readdirSync(path.join(blogDir))

  const blogs = files.map((filename) => {
    const fileContent = fs.readFileSync(path.join(blogDir, filename), 'utf-8')

    const { data: frontMatter } = matter(fileContent)

    return {
      meta: frontMatter,
      slug: filename.replace('.mdx', ''),
    }
  })

  return (
    <>
      <h1 className="text-3xl font-bold text-primary">{`Scott's Thoughts`}</h1>
      <section className="py-5">
        {blogs.map((blog) => (
          <>
            <Link
              className="block group [&:not(:last-child)]:border-border [&:not(:last-child)]:border-b"
              href={'/blog/' + blog.slug}
              key={blog.slug}
            >
              <div className="py-5">
                <h2 className="text-lg font-bold group-hover:underline group-hover:text-current text-primary transition-colors mb-4">
                  {blog.meta.title}
                </h2>
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
