import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Image from 'next/image'
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
      <ul className="py-5 px-0">
        {blogs.map((blog) => (
          <>
            <li
              className="[&:not(:last-child)]:mb-4 [&:not(:last-child)]:border-border [&:not(:last-child)]:border-b list-none pb-4"
              key={blog.slug}
            >
              <Link
                className="block BlogItem bg-transparent [&:is(:focus,:hover)]:bg-surface transition-[background-color] p-4"
                href={'/blog/' + blog.slug}
              >
                <Image
                  src={blog.meta.image}
                  width={blog.meta.width}
                  height={blog.meta.height}
                  alt={blog.meta.title}
                />

                <div className="py-5">
                  <h2 className="text-lg font-bold [.BlogItem:is(:hover,:focus)_&]:underline [.BlogItem:is(:hover,:focus)_&]:text-current text-primary transition-colors mb-4">
                    {blog.meta.title}
                  </h2>
                  <p className="mb-2">{blog.meta.description}</p>
                  <p className="text-xs text-gray-400">{blog.meta.date}</p>
                </div>
              </Link>
            </li>
          </>
        ))}
      </ul>
    </>
  )
}
