import { remarkCodeHike } from '@code-hike/mdx'
import rehypePrism from '@mapbox/rehype-prism'
import nextMDX from '@next/mdx'
import rehypeKatex from 'rehype-katex'
import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math'
import { createRequire } from 'module'
const require = createRequire(import.meta.url)
const theme = require('./src/codehiketheme')

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: { esmExternals: true },
  pageExtensions: ['js', 'jsx', 'mdx'],
  reactStrictMode: true,
  experimental: {
    scrollRestoration: true,
  },
}

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [[remarkCodeHike, { theme: theme }], remarkGfm, remarkMath],
    rehypePlugins: [rehypePrism, rehypeKatex],
  },
})

export default withMDX(nextConfig)
