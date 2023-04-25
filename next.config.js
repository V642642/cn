/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    NEXT_PUBLIC_BACKEND_API: process.env.NEXT_PUBLIC_BACKEND_API,
  }
}

module.exports = nextConfig;
module.exports = {
  images: {
      domains: ['images.prismic.io','blog.hiringplug.com'],
  },
}
