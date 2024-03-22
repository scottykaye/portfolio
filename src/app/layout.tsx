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
// @TODO: Add light mode vs dark mode favicon toggles

export const metadata: Metadata = {
  title: {
    default: 'Scotty Kaye',
    template: '%s | Scotty Kaye',
  },
  description:
    'Scotty Kaye is a Frontend Software Engineer located in Boston, Massachusetts with a strong background in UI, React, Accessibility and Next.js',
  icons: [
    {
      url: `/images/${
        process.env.DEV === 'local' ? 'scottykaye-dev/' : ''
      }favicon.ico`,
      type: 'image/x-icon',
      sizes: '48x48',
    },
    {
      url: `/images/${
        process.env.DEV === 'local' ? 'scottykaye-dev/' : ''
      }favicon-32x32.png`,
      type: 'image/png',
      sizes: '32x32',
    },

    {
      url: `/images/${
        process.env.DEV === 'local' ? 'scottykaye-dev/' : ''
      }favicon-16x16.png`,
      type: 'image/png',
      sizes: '16x16',
    },
    {
      rel: 'apple-touch-icon',
      url: '/images/apple-touch-icon.png',
      sizes: '180x180',
    },
  ],
  openGraph: {
    type: 'website',
    title: 'Scotty Kaye',
    siteName: 'Scotty Kaye',
    description: 'Scotty Kaye | Staff Frontend Software Engineer',
    url: 'https://scottykaye.com',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@site',
    creator: '@creator',
    images: '/images/android-chrome-512x512.png',
  },
}

export const metadata: Metadata = {
  title: {
    default: 'Scotty Kaye',
    template: '%s | Scotty Kaye',
  },
  description:
    'Scotty Kaye is a Frontend Software Engineer located in Boston, Massachusetts with a strong background in UI, React, Accessibility and Next.js',
  icons: [
    {
      url: `/images/${
        process.env.DEV === 'local' ? 'scottykaye-dev/' : ''
      }favicon.ico`,
      type: 'image/x-icon',
      sizes: '48x48',
    },
    {
      url: `/images/${
        process.env.DEV === 'local' ? 'scottykaye-dev/' : ''
      }favicon-32x32.png`,
      type: 'image/png',
      sizes: '32x32',
    },

    {
      url: `/images/${
        process.env.DEV === 'local' ? 'scottykaye-dev/' : ''
      }favicon-16x16.png`,
      type: 'image/png',
      sizes: '16x16',
    },
    {
      rel: 'apple-touch-icon',
      url: '/images/apple-touch-icon.png',
      sizes: '180x180',
    },
  ],
  openGraph: {
    type: 'website',
    title: 'Scotty Kaye',
    siteName: 'Scotty Kaye',
    description: 'Scotty Kaye | Staff Frontend Software Engineer',
    url: 'https://scottykaye.com',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@site',
    creator: '@creator',
    images: '/images/android-chrome-512x512.png',
  },
}

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--montserrat',
  weight: ['400', '700'],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      {/*
      Older handling of metadata, here in case I made a  mistake

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
    */}
      <body className={clsx(montserrat.className, montserrat.variable)}>
        {children}
      </body>
    </html>
  )
}
