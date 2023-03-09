/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/bio',
        permanent: false, //set true before production
      },
    ]
  },
  images: {
    domains: [
      'github.com',
      'www.rainmakers.co',
      'raw.githubusercontent.com',
      'external-content.duckduckgo.com',
      'random.imagecdn.app',
      'some-random-api.ml',
      'okazakee-dev-storage.s3.eu-west-3.amazonaws.com', // add S3 bucket domain
    ],
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader',
    });
    return config;
  },
}