/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/Bio',
        permanent: false, //set true before production
      },
    ]
  },
  images: {
    domains: ['github.com', 'external-content.duckduckgo.com'],
  },
}