import { remarkCodeHike } from '@code-hike/mdx'
import rehypePrism from '@mapbox/rehype-prism'
import nextMDX from '@next/mdx'
import remarkGfm from 'remark-gfm'
import theme from 'shiki/themes/nord.json' assert { type: 'json' }

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'mdx'],
  reactStrictMode: true,
  experimental: {
    scrollRestoration: true,
  },
}

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm, [remarkCodeHike, { theme }]],
    rehypePlugins: [rehypePrism],
  },
})

export default withMDX(nextConfig)
