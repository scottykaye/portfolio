import type { Metadata, Viewport } from 'next'
import { Montserrat } from 'next/font/google'
import clsx from 'clsx'
import './globals.css'

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

const montserrat = Montserrat({ subsets: ['latin'], variable: '--montserrat' })

export const metadata: Metadata = {
  title: 'ScottyKaye Portfolio',
  description: "Hey I'm Scott, a Frontend Software Engineer",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="icon"
          href={`/images/${
            process.env.DEV === 'local' ? 'scottykaye-dev/' : ''
          }favicon.ico`}
          sizes="any"
        />

        <link
          rel="icon"
          href={`/images/${
            process.env.DEV === 'local' ? 'scottykaye-dev/' : ''
          }/favicon?<generated>`}
          type="image/<generated>"
          sizes="<generated>"
        />
        <link
          rel="apple-touch-icon"
          href={`/images/${
            process.env.DEV === 'local' ? 'scottykaye-dev/' : ''
          }/apple-touch-icon?<generated>`}
          type="image/<generated>"
          sizes="<generated>"
        />
      </head>
      <body className={clsx(montserrat.className, montserrat.variable)}>
        {children}
      </body>
    </html>
  )
}
