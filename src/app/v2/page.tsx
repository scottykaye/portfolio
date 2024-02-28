// @ts-expect-error
import { cache } from 'react'
import { Octokit } from 'octokit'
import { headers as nextHeaders } from 'next/headers'
import Image from 'next/image'
import Link from 'next/link'
import { Footer, SocialLinkIcon } from '../../components/v2/Footer/Footer'

async function getData(userAgent) {
  const octokit = new Octokit({
    auth: `${process.env.GITHUB}`,
    'Content-Type': 'application/json',
    userAgent,
  })
  try {
    const data = await octokit.request(
      'GET /repos/scottykaye/keyboard-navigation',
      {
        owner: 'scottykaye',
        repo: 'keyboard-navigation',
      },
    )
    return data
  } catch (e) {
    console.log(`Error retrieving Github data: ${e}`)
  }
}

async function getStargazersData(url) {
  const fetchData = fetch(url)

  try {
    const data = await fetchData
    const response = data.json()

    return response
  } catch (e) {
    console.log(`Error retrieving Github Stargazers data: ${e}`)
  }
}

const getGithubData = cache(getData)
const getStargazers = cache(getStargazersData)

async function getCodepen(url) {
  const fetchData = fetch(
    `https://codepen.io/api/oembed?format=json&url=${url}`,
  )

  try {
    const data = await fetchData
    const response = data.json()

    return response
  } catch (e) {
    console.log(`Error retrieving Codepen data: ${e}`)
  }
}

const HOVER_CODEPEN = 'https://codepen.io/scottykaye/pen/xxBMKyb'

export default async function Test() {
  const headers = nextHeaders()
  const { data: github } = await getGithubData(headers.get('user-agent'))
  const stargazers = await getStargazers(github.stargazers_url)
  const codepen = await getCodepen(HOVER_CODEPEN)

  return (
    <>
      <header className="Header sticky top-0 backdrop-blur-sm backdrop-hue-rotate-30 border-b border-border p-5 z-40">
        <div className="max-w-3xl mx-auto flex justify-between items-center">
          <Link href="/" className="Logo" title="Scotty Kaye Home">
            SK
          </Link>
          <nav className="overflow-clip">
            <ul className="Nav-list list-none p-0 m-0 flex">
              <li className="Nav-item">
                <Link
                  href="/"
                  className="Nav-link block relative overflow-clip p-5"
                >
                  Thoughts
                </Link>
              </li>
              <li className="Nav-item">
                <Link
                  href="/resume"
                  className="Nav-link block relative overflow-clip p-5 "
                >
                  Resume
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main>
        <div className="grid max-w-3xl mx-auto min-h-full">
          <Image
            src="/images/scottykaye-bg.jpg"
            fill={true}
            placeholder="blur"
            style={{
              objectFit: 'cover',
              objectPosition: '30% 50%',
              zIndex: '-1',
              filter:
                'sepia(.2) brightness(.5) contrast(1.1) saturate() opacity(1)',
            }}
            alt="Picture of Scotty Kaye"
            blurDataURL="data:image/jpg"
          />
          <h1 className="Scroll flex items-center gap-4">
            <Image
              src="/images/scottykaye-avatar.jpg"
              width="150"
              height="150"
              placeholder="blur"
              alt="Picture of Scotty Kaye"
              blurDataURL="data:image/jpg"
              style={{
                borderRadius: '50%',
                filter: 'drop-shadow(0 .25rem .5rem #000)',
              }}
              className="border border-border "
            />
            <span className="Title">
              Hi👋,
              <span className="block">{`I'm Scotty Kaye`}</span>
            </span>
          </h1>
          <div className="Scroll">
            <h2 className="text-2xl primary font-bold mb-5 text-primary">
              Projects
            </h2>
            <div className="rounded-md m-auto shadow-lift backdrop-blur boxShadow-lift bg-background-opaque backdrop-hue-rotate-30 border border-border mix-blend-difference">
              <div className="flex gap-5 justify-between p-4 border-b border-border">
                <div className="flex gap-2">
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="cube"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    width="20"
                  >
                    <path
                      fill="currentColor"
                      d="M239.1 6.3l-208 78c-18.7 7-31.1 25-31.1 45v225.1c0 18.2 10.3 34.8 26.5 42.9l208 104c13.5 6.8 29.4 6.8 42.9 0l208-104c16.3-8.1 26.5-24.8 26.5-42.9V129.3c0-20-12.4-37.9-31.1-44.9l-208-78C262 2.2 250 2.2 239.1 6.3zM256 68.4l192 72v1.1l-192 78-192-78v-1.1l192-72zm32 356V275.5l160-65v133.9l-160 80z"
                    ></path>
                  </svg>
                  <a
                    href={github.html_url}
                    className="underline underline-offset-2 hover:no-underline transition-colors hover:text-primary"
                  >
                    {github.full_name}
                  </a>
                </div>
                <p className="text-xs text-primary">{github.language}</p>
              </div>
              <div className="p-4 border-b border-border">
                <p className="mb-3">{github.name}</p>
                <p>{github.description}</p>
              </div>
              <div className="flex gap-5 items-center text-sm p-4">
                <div className="flex gap-1">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.2691 4.41115C11.5006 3.89177 11.6164 3.63208 11.7776 3.55211C11.9176 3.48263 12.082 3.48263 12.222 3.55211C12.3832 3.63208 12.499 3.89177 12.7305 4.41115L14.5745 8.54808C14.643 8.70162 14.6772 8.77839 14.7302 8.83718C14.777 8.8892 14.8343 8.93081 14.8982 8.95929C14.9705 8.99149 15.0541 9.00031 15.2213 9.01795L19.7256 9.49336C20.2911 9.55304 20.5738 9.58288 20.6997 9.71147C20.809 9.82316 20.8598 9.97956 20.837 10.1342C20.8108 10.3122 20.5996 10.5025 20.1772 10.8832L16.8125 13.9154C16.6877 14.0279 16.6252 14.0842 16.5857 14.1527C16.5507 14.2134 16.5288 14.2807 16.5215 14.3503C16.5132 14.429 16.5306 14.5112 16.5655 14.6757L17.5053 19.1064C17.6233 19.6627 17.6823 19.9408 17.5989 20.1002C17.5264 20.2388 17.3934 20.3354 17.2393 20.3615C17.0619 20.3915 16.8156 20.2495 16.323 19.9654L12.3995 17.7024C12.2539 17.6184 12.1811 17.5765 12.1037 17.56C12.0352 17.5455 11.9644 17.5455 11.8959 17.56C11.8185 17.5765 11.7457 17.6184 11.6001 17.7024L7.67662 19.9654C7.18404 20.2495 6.93775 20.3915 6.76034 20.3615C6.60623 20.3354 6.47319 20.2388 6.40075 20.1002C6.31736 19.9408 6.37635 19.6627 6.49434 19.1064L7.4341 14.6757C7.46898 14.5112 7.48642 14.429 7.47814 14.3503C7.47081 14.2807 7.44894 14.2134 7.41394 14.1527C7.37439 14.0842 7.31195 14.0279 7.18708 13.9154L3.82246 10.8832C3.40005 10.5025 3.18884 10.3122 3.16258 10.1342C3.13978 9.97956 3.19059 9.82316 3.29993 9.71147C3.42581 9.58288 3.70856 9.55304 4.27406 9.49336L8.77835 9.01795C8.94553 9.00031 9.02911 8.99149 9.10139 8.95929C9.16534 8.93081 9.2226 8.8892 9.26946 8.83718C9.32241 8.77839 9.35663 8.70162 9.42508 8.54808L11.2691 4.41115Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <p>{github.stargazers_count}</p>
                </div>
                <div className="flex gap-1">
                  {stargazers.length &&
                    stargazers.map((stargazer) => {
                      return (
                        <div
                          key={stargazer.login}
                          className="w-8 h-8 overflow-clip rounded-full border border-border"
                        >
                          <Image
                            width={32}
                            height={32}
                            src={stargazer.avatar_url}
                            alt={`${stargazer.login}'s avatar image`}
                          />
                        </div>
                      )
                    })}
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <h2 className="text-2xl primary font-bold mb-5 text-primary">
              Codepens
            </h2>
            <div className="rounded-md m-auto shadow-lift backdrop-blur boxShadow-lift bg-background-opaque bg-blend-difference border border-border min-w-full p-2">
              <iframe
                height="320"
                className="w-full"
                // @ts-expect-error
                allowtransparency="true"
                srcDoc={codepen.html}
              ></iframe>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
