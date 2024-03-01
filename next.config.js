const { createVanillaExtractPlugin } = require('@vanilla-extract/next-plugin')

const withVanillaExtract = createVanillaExtractPlugin()

const nextConfig = {
  swcMinify: true,

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
        port: '',
        pathname: '/u/**',
      },
    ],
  },
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: '/',
          destination: '/v2',
          has: [
            {
              type: 'cookie',
              key: 'scottykaye-v2',
              value: 'true',
            },
          ],
        },
        {
          source: '/resume',
          destination: '/v2/resume',
          has: [
            {
              type: 'cookie',
              key: 'scottykaye-v2',
              value: 'true',
            },
          ],
        },
        {
          source: '/blog/:slug*',
          destination: '/v2/blog/:slug*',
          has: [
            {
              type: 'cookie',
              key: 'scottykaye-v2',
              value: 'true',
            },
          ],
        },
      ],
    }
  },
  webpack(config) {
    config.resolve.fallback = {
      // if you miss it, all the other options in fallback, specified
      // by next.js will be dropped.
      ...config.resolve.fallback,

      fs: false, // the solution
    }

    return config
  },
}

module.exports = withVanillaExtract(nextConfig)
