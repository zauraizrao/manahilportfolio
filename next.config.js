/** @type {import('next').NextConfig} */
const nextConfig = { images: { remotePatterns: [
  { protocol: 'https', hostname: 'manahilhassan.netlify.app' },
  { protocol: 'https', hostname: 'api.microlink.io' }
] } };
module.exports = nextConfig;
