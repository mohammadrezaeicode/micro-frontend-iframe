/** @type {import('next').NextConfig} */
const nextConfig = {
  // basePath: '.',
  output: 'export',
  assetPrefix: ".",
  distDir: 'dist',
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig
