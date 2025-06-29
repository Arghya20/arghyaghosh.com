/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true }
  // Remove the headers configuration as it's not compatible with static exports
};

module.exports = nextConfig;
