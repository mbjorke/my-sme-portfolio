/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ['en', 'sv'],
    defaultLocale: 'en',
  },
  reactStrictMode: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  images: {
    domains: ['avatars.githubusercontent.com'],
  },
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
};

module.exports = nextConfig;
