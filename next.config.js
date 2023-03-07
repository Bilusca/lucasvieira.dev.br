/** @type {import('next').NextConfig} */
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

module.exports = nextConfig
