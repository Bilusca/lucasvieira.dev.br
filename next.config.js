/** @type {import('next').NextConfig} */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
})

const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'blog.lucasvieira.dev',
        port: '',
        pathname: '/uploads/**'
      }
    ]
  }
}

module.exports = withBundleAnalyzer(nextConfig)
