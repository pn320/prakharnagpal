import { Container } from '@/components/Container'

export function SimpleLayout({ title, color, intro, children }) {
  return (
    <Container className="mt-16 sm:mt-32">
      <header className="max-w-2xl">
        <h1 className="font-serif text-4xl font-normal tracking-tighter text-zinc-800 dark:text-zinc-100 sm:text-5xl">
          {title}
          <span className="text-red-800"> {color}</span>
        </h1>
        <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
          {intro}
        </p>
      </header>
      <div className="mt-16 sm:mt-20">{children}</div>
    </Container>
  )
}
