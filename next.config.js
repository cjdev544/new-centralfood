/** @type {import('next').NextConfig} */

const runtimeCaching = require('next-pwa/cache')
const withPWA = require('next-pwa')({
  disable: process.env.NODE_ENV === 'development',
  dest: 'public',
  runtimeCaching,
})

module.exports = withPWA({
  productionBrowserSourceMaps: true,
  reactStrictMode: true,
  swcMinify: true,
  images: {
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    domains: ['firebasestorage.googleapis.com', 'lh3.googleusercontent.com'],
  },
})
