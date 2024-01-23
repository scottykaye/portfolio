const { createVanillaExtractPlugin } = require('@vanilla-extract/next-plugin')

const withVanillaExtract = createVanillaExtractPlugin()

const nextConfig = {
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
