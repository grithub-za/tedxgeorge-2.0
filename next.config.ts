import { withPayload } from '@payloadcms/next/withPayload'
import type { NextConfig } from 'next'
import path from 'path'
import { fileURLToPath } from 'url'

const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
})

const __filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(__filename)

const nextConfig: NextConfig = {
  webpack: (webpackConfig) => {
    webpackConfig.resolve.extensionAlias = {
      '.cjs': ['.cts', '.cjs'],
      '.js': ['.ts', '.tsx', '.js', '.jsx'],
      '.mjs': ['.mts', '.mjs'],
    }

    return webpackConfig
  },
  turbopack: {
    root: path.resolve(dirname),
  },
  images: {
    localPatterns: [
      {
        pathname: '/assets/**',
        search: '',
      },
      {
        pathname: '/**',
        search: '',
      },
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.ytimg.com',
      },
      {
        protocol: 'https',
        hostname: '**.vercel.app',
      },
      {
        protocol: 'https',
        hostname: 'dummyimage.com',
      },
      {
        protocol: 'https',
        hostname: '**.googleapis.com',
      },
      {
        protocol: 'https',
        hostname: '**.youtube.com',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/events/details/:slug',
        destination: '/events/:slug',
        permanent: true,
      },
    ]
  },
}

export default withPayload(withPWA(nextConfig), { devBundleServerPackages: false })
