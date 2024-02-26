import { cache } from 'react'
import { Octokit } from 'octokit'
import { headers as nextHeaders } from 'next/headers'
import Image from 'next/image'

async function getData(userAgent) {
  const octokit = new Octokit({
    auth: `${process.env.GITHUB}`,
    'Content-Type': 'application/json',
    userAgent,
  })
  try {
    const test = await octokit.request(
      'GET /repos/scottykaye/keyboard-navigation',
      {
        owner: 'scottykaye',
        repo: 'keyboard-navigation',
      },
    )
    return test
  } catch (e) {
    console.log(e)
  }
}

async function getStargazersData(url) {
  const fetchData = fetch(url)

  try {
    const data = await fetchData
    const response = data.json()

    return response
  } catch (e) {
    console.log(e)
  }
}

const getGithubData = cache(getData)
const getStargazers = cache(getStargazersData)

export default async function Test() {
  const headers = nextHeaders()
  const { data: github } = await getGithubData(headers.get('user-agent'))
  const stargazers = await getStargazers(github.stargazers_url)
  console.log(github)
  return (
    <>
      <header className="Header sticky top-0 backdrop-blur border-b-2 border-border p-5 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <a href="/" className="Logo" alt="Scotty Kaye Home">
            SK
          </a>
          <nav className="Nav">
            <ul className="Nav-list">
              <li className="Nav-item">
                <a href="/" className="Nav-link">
                  Thoughts
                </a>
              </li>
              <li className="Nav-item">
                <a href="/" className="Nav-link">
                  Resume
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main>
        <div className="grid max-w-7xl mx-auto min-h-full">
          <h1 className="Title Scroll m-auto">Hi👋, I'm Scotty Kaye</h1>
          <div className="Scroll grid place-self-center">
            <h2 className="text-2xl primary font-bold mb-5 text-primary">
              Projects
            </h2>
            <div className="rounded-md m-auto shadow-lift backdrop-blur boxShadow-lift bg-background-opaque bg-blend-difference border border-border">
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
                    stargazers.map((stargazer, index) => {
                      return (
                        <div className="w-8 h-8 overflow-clip rounded-full border border-border">
                          <img
                            width={32}
                            height={32}
                            src={stargazer.avatar_url}
                          />
                        </div>
                      )
                    })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="Footer">
        <div className="Footer-item">
          Scotty Kaye {new Date().getFullYear()}
        </div>
        <div className="gap-4 flex">
          <a
            aria-label="Scotty Kaye's LinkedIn (opens in new window)"
            href="https://www.linkedin.com/in/scott-kaye-93279b54/"
            target="_blank"
            rel="noreferrer"
            className="fill-primary outline-offset-4 transition-all hover:scale-125 focus:scale-125 [&:not(:focus,:hover)]:opacity-75"
          >
            <svg
              fill="inherit"
              aria-hidden="true"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </a>
          <a
            aria-label="Scotty Kaye's Twitch (opens in new window)"
            href="https:/twitch.tv/scottykaye"
            target="_blank"
            rel="noreferrer"
            className="fill-primary outline-offset-4 transition-all hover:scale-125 focus:scale-125 [&:not(:focus,:hover)]:opacity-75"
          >
            <svg
              aria-hidden="true"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
            >
              <title>Twitch</title>
              <desc>View ScottyKaye on Twitch</desc>
              <path d="M2.149 0l-1.612 4.119v16.836h5.731v3.045h3.224l3.045-3.045h4.657l6.269-6.269v-14.686h-21.314zm19.164 13.612l-3.582 3.582h-5.731l-3.045 3.045v-3.045h-4.836v-15.045h17.194v11.463zm-3.582-7.343v6.262h-2.149v-6.262h2.149zm-5.731 0v6.262h-2.149v-6.262h2.149z" />
            </svg>
          </a>
          <a
            aria-label="Scotty Kaye's Instagram (opens in new window)"
            href="https://www.instagram.com/localmeethero"
            target="_blank"
            rel="noreferrer"
            className="fill-primary outline-offset-4 transition-all hover:scale-125 focus:scale-125 [&:not(:focus,:hover)]:opacity-75"
          >
            <svg
              fill="inherit"
              aria-hidden="true"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
            >
              <title>Instagram</title>
              <desc>View ScottyKaye on Instagram</desc>
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
            </svg>
          </a>
          <a
            aria-label="Scotty Kaye's Twitter (opens in new window)"
            href="https://twitter.com/scottykaye"
            target="_blank"
            rel="noreferrer"
            className="fill-primary outline-offset-4 transition-all hover:scale-125 focus:scale-125 [&:not(:focus,:hover)]:opacity-75"
          >
            <svg
              fill="inherit"
              aria-hidden="true"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
            >
              <title>Twitter</title>
              <desc>View ScottyKaye on Twitter</desc>
              <path d="M24 4.557a9.83 9.83 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724 9.864 9.864 0 0 1-3.127 1.195 4.916 4.916 0 0 0-3.594-1.555c-3.179 0-5.515 2.966-4.797 6.045A13.978 13.978 0 0 1 1.671 3.149a4.93 4.93 0 0 0 1.523 6.574 4.903 4.903 0 0 1-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 0 1-2.224.084 4.928 4.928 0 0 0 4.6 3.419A9.9 9.9 0 0 1 0 19.54a13.94 13.94 0 0 0 7.548 2.212c9.142 0 14.307-7.721 13.995-14.646A10.025 10.025 0 0 0 24 4.557z" />
            </svg>
          </a>
          <a
            aria-label="Scotty Kaye's Github (opens in new window)"
            href="https://github.com/scottykaye/"
            target="_blank"
            rel="noreferrer"
            className="fill-primary outline-offset-4 transition-all hover:scale-125 focus:scale-125 [&:not(:focus,:hover)]:opacity-75"
          >
            <svg
              fill="inherit"
              aria-hidden="true"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
            >
              <title>GitHub</title>
              <desc>View ScottyKaye on GitHub</desc>
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
          <a
            aria-label="Email Scotty Kaye (opens in a new window)"
            href="mailto:scottykaye.web@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="fill-primary outline-offset-4 transition-all hover:scale-125 focus:scale-125 [&:not(:focus,:hover)]:opacity-75"
          >
            <svg
              fill="inherit"
              aria-hidden="true"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 122.88 88.86"
            >
              <title>Email</title>
              <desc>Email Scotty Kaye</desc>
              <path d="M7.05,0H115.83a7.07,7.07,0,0,1,7,7.05V81.81a7,7,0,0,1-1.22,4,2.78,2.78,0,0,1-.66,1,2.62,2.62,0,0,1-.66.46,7,7,0,0,1-4.51,1.65H7.05a7.07,7.07,0,0,1-7-7V7.05A7.07,7.07,0,0,1,7.05,0Zm-.3,78.84L43.53,40.62,6.75,9.54v69.3ZM49.07,45.39,9.77,83.45h103L75.22,45.39l-11,9.21h0a2.7,2.7,0,0,1-3.45,0L49.07,45.39Zm31.6-4.84,35.46,38.6V9.2L80.67,40.55ZM10.21,5.41,62.39,47.7,112.27,5.41Z" />
            </svg>
          </a>
        </div>
      </footer>
    </>
  )
}
