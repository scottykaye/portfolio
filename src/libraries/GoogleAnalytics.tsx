'use client'

import Script from 'next/script'

export function GoogleAnalytics() {
  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-PHR3NMG6SK"
        id="google-analytics-tag-script"
        strategy="afterInteractive"
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
        strategy="afterInteractive"
      />
    </>
  )
}
