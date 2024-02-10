//@ts-check

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { composePlugins, withNx } = require('@nx/next')
const withTM = require('next-transpile-modules')([
  '@magickml/behave-graph',
  'pdfjs-dist',
])

/**
 * @type {import('@nx/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  nx: {
    svgr: false,
  },
  images: {
    domains: [
      'replicate.delivery',
      'emawtpjmqvwygksvurku.supabase.co',
      'lglrzlrsfxchbqsslvur.supabase.co',
      'i.ytimg.com',
      'pub-58d22deb43dc48e792b7b7468610b5f9.r2.dev',
      'directus-production-1d52.up.railway.app',
    ],
  },
  reactStrictMode: false,
  webpack: config => {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    })

    config.module.rules.push({
      test: [/pdfjs-dist\/build\/pdf\.worker\.js$/],
      type: 'asset/resource',
    })
    config.experiments = {
      layers: true,
    }

    return config
  },
}

module.exports = composePlugins(withNx, withTM)(nextConfig)
