import Head from 'next/head'

import { SimpleLayout } from '@/components/SimpleLayout'

export default function ThankYou() {
  return (
    <>
      <Head>
        <title>You’re subscribed - Prakhar Nagpal</title>
        <meta
          name="description"
          content="Thanks for subscribing to my newsletter."
        />
      </Head>
      <SimpleLayout
        title="Thanks for subscribing :)"
        intro="I’ll send you an email any time I publish a new blog post, release a new project, or have anything interesting to talk about. Should you unsubscribe at any point I will require you to refer a friend (need to keep those dopamine levels up)!"
      />
    </>
  )
}
