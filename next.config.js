/** @type {import('next').NextConfig} */
const nextConfig = {
  output: process.env.STATIC_EXPORT ? 'export' : 'standalone',
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/introduction',
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;

