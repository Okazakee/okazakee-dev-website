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
    domains: ['github.com', 'www.rainmakers.co', 'raw.githubusercontent.com', 'external-content.duckduckgo.com', 'random.imagecdn.app', 'some-random-api.ml'],
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader',
    });
    return config;
  },
}