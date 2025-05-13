/** @type {import('next').NextConfig} */
const UnoCSS = require('@unocss/webpack');

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
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'media.licdn.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn.bsky.app',
      },
    ],
  },
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
  webpack(config) {
    config.plugins.push(UnoCSS());
    return config;
  },
};

module.exports = nextConfig;
