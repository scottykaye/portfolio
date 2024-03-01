import { ReactNode } from 'react'
import { Footer } from '@components/v2/Footer/Footer'
import { SocialLinkIcon } from '@components/v2/Footer/SocialLinkIcon'
import { Header, MainNav } from '@components/v2/Header/Header'
import { MainNavLink } from '@components/v2/Header/Link'
import Link from 'next/link'

export default function StandardLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header>
        <div className="flex">
          <Link
            href="/"
            className="Logo outline-offset-4 focus-visible:border-primary"
            title="Scotty Kaye Home"
          >
            SK
          </Link>
        </div>
        <MainNav>
          <li className="Nav-item">
            <MainNavLink href="/">Thoughts</MainNavLink>
          </li>
          <li className="Nav-item">
            <MainNavLink href="/resume">Resume</MainNavLink>
          </li>
        </MainNav>
      </Header>
      <main>{children}</main>
      <Footer>
        <li className="flex gap-2 place-items-center">
          <svg
            width="32"
            viewBox="0 0 400 400"
            // This should be an inverse color var at some point for light mode
            //fill="currentColor"
            aria-labelledby="title"
          >
            <title id="title">Scotty Kaye logo</title>
            <path d="M387.546,201.298c0,103.577-83.97,187.54-187.549,187.54c-103.577,0-187.543-83.963-187.543-187.54 c0-103.584,83.966-187.546,187.543-187.546C303.577,13.752,387.546,97.714,387.546,201.298z"></path>
            <path
              fill="currentColor"
              d="M377.652,201.293c0,98.113-79.536,177.65-177.655,177.65c-98.113,0-177.65-79.537-177.65-177.65 c0-98.111,79.538-177.647,177.65-177.647C298.116,23.646,377.652,103.182,377.652,201.293z"
            ></path>
            <path d="M367.193,201.293c0,92.338-74.857,167.194-167.196,167.194c-92.336,0-167.19-74.856-167.19-167.194 c0-92.337,74.854-167.19,167.19-167.19C292.336,34.103,367.193,108.956,367.193,201.293z"></path>
            <path
              fill="currentColor"
              d="M358.192,202.218c0,87.565-70.981,154.937-158.542,154.937V202.218H358.192z"
            ></path>
            <path
              fill="currentColor"
              d="M43.387,201.007c0-87.566,70.982-155.712,158.543-155.712v155.879L43.387,201.007z"
            ></path>
            <path d="M340.002,200.003c0,77.319-62.681,140.001-140.005,140.001c-77.323,0-140.002-62.682-140.002-140.001 c0-77.324,62.679-140.008,140.002-140.008C277.321,59.995,340.002,122.679,340.002,200.003z"></path>
            <g>
              <path
                fill="currentColor"
                d="M185.161,187.812c-6.08-2.077-10.528-3.263-17.795-3.263c-5.338,0-11.715,1.928-11.715,8.452 c0,12.16,34.552,4.449,34.552,32.031c0,17.796-15.867,24.912-32.031,24.912c-7.562,0-15.274-1.334-22.541-3.262l1.187-16.312 c6.228,3.114,12.753,5.042,19.573,5.042c5.042,0,13.05-1.928,13.05-9.342c0-14.978-34.551-4.745-34.551-32.327 c0-16.46,14.384-23.728,29.955-23.728c9.342,0,15.422,1.484,21.65,2.818L185.161,187.812z"
              ></path>
              <path
                fill="currentColor"
                d="M200.136,136.947h19.871v65.396h0.296l23.728-30.547h23.43l-28.472,34.105l32.031,42.264h-25.209 l-25.507-37.073h-0.296v37.073h-19.871V136.947z"
              ></path>
            </g>
          </svg>
          Scotty Kaye {new Date().getFullYear()}
        </li>
        <li className="gap-4 flex items-center">
          <SocialLinkIcon
            label="Scotty Kaye's LinkedIn (opens in new window)"
            href="https://www.linkedin.com/in/scott-kaye-93279b54/"
            openInNewWindow
          >
            <title>LinkedIn</title>
            <desc>View ScottyKaye on LinkedIn</desc>
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
          </SocialLinkIcon>
          <SocialLinkIcon
            label="Scotty Kaye's Twitch (opens in new window)"
            href="https:/twitch.tv/scottykaye"
            openInNewWindow
          >
            <title>Twitch</title>
            <desc>View ScottyKaye on Twitch</desc>
            <path d="M2.149 0l-1.612 4.119v16.836h5.731v3.045h3.224l3.045-3.045h4.657l6.269-6.269v-14.686h-21.314zm19.164 13.612l-3.582 3.582h-5.731l-3.045 3.045v-3.045h-4.836v-15.045h17.194v11.463zm-3.582-7.343v6.262h-2.149v-6.262h2.149zm-5.731 0v6.262h-2.149v-6.262h2.149z" />
          </SocialLinkIcon>
          <SocialLinkIcon
            label="Scotty Kaye's Instagram (opens in new window)"
            href="https://www.instagram.com/localmeethero"
            openInNewWindow
          >
            <title>Instagram</title>
            <desc>View ScottyKaye on Instagram</desc>
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
          </SocialLinkIcon>
          <SocialLinkIcon
            label="Scotty Kaye's Twitter (opens in new window)"
            href="https://twitter.com/scottykaye"
            openInNewWindow
          >
            <title>Twitter</title>
            <desc>View ScottyKaye on Twitter</desc>
            <path d="M24 4.557a9.83 9.83 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724 9.864 9.864 0 0 1-3.127 1.195 4.916 4.916 0 0 0-3.594-1.555c-3.179 0-5.515 2.966-4.797 6.045A13.978 13.978 0 0 1 1.671 3.149a4.93 4.93 0 0 0 1.523 6.574 4.903 4.903 0 0 1-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 0 1-2.224.084 4.928 4.928 0 0 0 4.6 3.419A9.9 9.9 0 0 1 0 19.54a13.94 13.94 0 0 0 7.548 2.212c9.142 0 14.307-7.721 13.995-14.646A10.025 10.025 0 0 0 24 4.557z" />
          </SocialLinkIcon>
          <SocialLinkIcon
            label="Scotty Kaye's Github (opens in new window)"
            href="https://github.com/scottykaye/"
            openInNewWindow
          >
            <title>GitHub</title>
            <desc>View ScottyKaye on GitHub</desc>
            <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
          </SocialLinkIcon>
          <SocialLinkIcon
            label="Email Scotty Kaye (opens in a new window)"
            href="mailto:scottykaye.web@gmail.com"
            openInNewWindow
            viewBox="0 0 122.88 88.86"
          >
            <title>Email</title>
            <desc>Email Scotty Kaye</desc>
            <path d="M7.05,0H115.83a7.07,7.07,0,0,1,7,7.05V81.81a7,7,0,0,1-1.22,4,2.78,2.78,0,0,1-.66,1,2.62,2.62,0,0,1-.66.46,7,7,0,0,1-4.51,1.65H7.05a7.07,7.07,0,0,1-7-7V7.05A7.07,7.07,0,0,1,7.05,0Zm-.3,78.84L43.53,40.62,6.75,9.54v69.3ZM49.07,45.39,9.77,83.45h103L75.22,45.39l-11,9.21h0a2.7,2.7,0,0,1-3.45,0L49.07,45.39Zm31.6-4.84,35.46,38.6V9.2L80.67,40.55ZM10.21,5.41,62.39,47.7,112.27,5.41Z" />
          </SocialLinkIcon>
        </li>
      </Footer>
    </>
  )
}
