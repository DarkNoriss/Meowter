/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['lh3.googleusercontent.com'],
  },
  serverRuntimeConfig: {
    externalServer: true,
  },
};

module.exports = nextConfig;
