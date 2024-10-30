'use client'

import Script from 'next/script'

export function GoogleAnalytics() {
  return (
    <>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-PHR3NMG6SK"
        id="google-analytics-tag-script"
      />
      <Script
        id="google-analytics-init"
        dangerouslySetInnerHTML={{
          __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-PHR3NMG6SK');            `,
        }}
        async
      />
    </>
  )
}
