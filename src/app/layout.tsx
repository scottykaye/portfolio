import type { Metadata, Viewport } from 'next'
import { Montserrat } from 'next/font/google'

import './globals.css'

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

const montserrat = Montserrat({ subsets: ['latin'] })

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
      <head />
      <body className={montserrat.className}>{children}</body>
    </html>
  )
}
