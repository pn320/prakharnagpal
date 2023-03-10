import Head from 'next/head'
import Image from 'next/image'

import { CommonLink } from '@/components/CommonLink'
import { Container } from '@/components/Container'
import portraitImage from '@/images/portrait.jpg'

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
            <h1 className="font-serif text-4xl font-normal tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              I’m Prakhar Nagpal. I{' '}
              <span className="text-red-800 dark:text-red-800">(try to) </span>
              build cool things!
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400art">
              <p>
                I picked up programming for the first time in university where I
                was I was exposed to some amazing people (some not so amazing,
                but such is life), failed more times than I could count, and
                learned to be more resilient than studying anything else could
                have made me (Except maybe Physics, f*** that).
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
                I am available as a freelancer, and am currently working as a
                contracted software engineer working to build the product for a
                wonderful startup called{' '}
                <CommonLink href="https://beta-staging.autair.co.uk/">
                  Autair
                </CommonLink>{' '}
                so if you have any ideas you think are going to be big and
                famous, and just want a gorgeous (almost impossible to pull off)
                website to show them off, let me know. I love a challenge more
                than anything!
              </p>
              <p>
                I am also slowly learning about Artificial intelligence (who
                isn&apos;t at this point) and am currently reading Peter
                Norvig&apos;s - Paradigms of Aritificial Intelligence while
                trying to write about what I learn as much as possible!
              </p>
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}
