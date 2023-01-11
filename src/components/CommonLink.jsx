import Link from 'next/link'

export function CommonLink({ href, children }) {
  return (
    <Link
      href={href}
      className="text-red-800 decoration-transparent dark:text-red-700"
    >
      {children}
    </Link>
  )
}
