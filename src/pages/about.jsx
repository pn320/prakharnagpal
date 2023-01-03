import clsx from 'clsx'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-pink-600 dark:text-zinc-200 dark:hover:text-pink-800"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-pink-600" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export default function About() {
  return (
    <>
      <Head>
        <title>About - Prakhar Nagpal</title>
        <meta
          name="description"
          content="I’m Prakhar Nagpal. I live in London, where I (try) to build
          awesome things"
        />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={portraitImage}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              I’m Prakhar Nagpal. I{' '}
              <span className="text-pink-600 dark:text-pink-800">
                (try to){' '}
              </span>
              build cool things!
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>
                I wish I could say I have been programming since I was 8, or
                built something amazing when I was in high school, or took part
                in a Computer Science Olympiad, but honestly I&apos;m just
                someone who loves programming. I picked it up in first year of
                university and haven&apos;t looked back since!
              </p>
              <p>
                As part of my coursework, I&apos;ve worked on compilers (a
                statically typed language called <b>WACC</b>) with support for
                object oriented programming and inheritance, an operating system
                (modelled after the infamous Stanford Operating Systems
                coursework - <b>Pintos</b>) written in <b>C</b>, and an emulator
                for a subset of the <b>ARM</b> instruction set.
              </p>
              <p>
                In my free time, I work with compilers (currently working on my
                own language called <b>Monk</b>), a lot of web development,
                creative coding (creating stunning visual animations using
                code), and most recently I&apos;ve been trying to learn about
                embedded and low latency engineering, i.e{' '}
                <b>Embedded systems and FPGA programming</b>.
              </p>
              <p>
                I am also slowly learning about Artificial intelligence (who
                isn&apos;t at this point) and am currently reading Peter
                Norvig&apos;s - Paradigms of Aritificial Intelligence while
                trying to write about what I learn as much as possible!
              </p>
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              <SocialLink href="#" icon={TwitterIcon}>
                Follow on Twitter
              </SocialLink>
              <SocialLink href="#" icon={InstagramIcon} className="mt-4">
                Follow on Instagram
              </SocialLink>
              <SocialLink href="#" icon={GitHubIcon} className="mt-4">
                Follow on GitHub
              </SocialLink>
              <SocialLink href="#" icon={LinkedInIcon} className="mt-4">
                Follow on LinkedIn
              </SocialLink>
              <SocialLink
                href="mailto:prakhar.nagpal03@gmail.com"
                icon={MailIcon}
                className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
              >
                prakhar.nagpal03@gmail.com
              </SocialLink>
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}
