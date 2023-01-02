import Link from 'next/link'

export function CommonLink({ href, children }) {
  return (
    <Link
      href={href}
      className="text-pink-600 decoration-transparent dark:text-pink-800"
    >
      {children}
    </Link>
  )
}
