import Image from 'next/image'
import Link from 'next/link'

export function Cartridge({ github, stargazers }) {
  return (
    <Link href={github.html_url} className="cartridge-container">
      <section className="cartridge">
        <div className="top">
          <h3 className="top-title">
            <span>
              {github.name
                .split('-')
                .map(
                  (word) =>
                    word.charAt(0).toUpperCase() + word.slice(1, word.length),
                )
                .join(' ')}
            </span>
          </h3>
          <div className="sidelines-cover"></div>
          <div className="sidelines"></div>
          <div className="sidelines"></div>
          <div className="sidelines"></div>
          <div className="sidelines"></div>
          <div className="sidelines"></div>
        </div>
        <div className="main">
          <div className="content">
            <p>{github.full_name}</p>
            <p>{github.description}</p>

            <div className="flex gap-1 flex-wrap">
              {stargazers.length &&
                stargazers.map((stargazer) => {
                  return (
                    <div
                      key={stargazer.login}
                      className="w-6 h-6 overflow-clip rounded-full border border-border"
                    >
                      <Image
                        width={24}
                        height={24}
                        src={stargazer.avatar_url}
                        alt={`${stargazer.login}'s avatar image`}
                      />
                    </div>
                  )
                })}
            </div>
          </div>
        </div>
      </section>
    </Link>
  )
}
