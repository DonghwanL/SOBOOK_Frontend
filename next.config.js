/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: `https://openapi.naver.com/:path*`,
      },
    ]
  },
  images: {
    domains: ['shopping-phinf.pstatic.net'],
  },
}

module.exports = nextConfig
