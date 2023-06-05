/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    NEXT_PUBLIC_BACKEND_API: process.env.NEXT_PUBLIC_BACKEND_API,
    NEXT_PUBLIC_S3_URL : process.env.NEXT_PUBLIC_S3_URL
  }
}

module.exports = nextConfig;
module.exports = {
  images: {
      domains: ['images.prismic.io','blog.hiringplug.com','hp-ca-web-prod.s3.ca-central-1.amazonaws.com'],
      loader: 'akamai',
      path: '',
  },
}
