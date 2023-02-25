import { remarkCodeHike } from '@code-hike/mdx'
import nextMDX from '@next/mdx'
import { createRequire } from 'module'
import rehypeKatex from 'rehype-katex'
import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math'
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
    remarkPlugins: [[remarkCodeHike, { theme: theme, showCopyButton: true }], remarkGfm, remarkMath],
    rehypePlugins: [rehypeKatex],
  },
})

export default withMDX(nextConfig)
