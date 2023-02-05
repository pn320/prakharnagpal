import Link from 'next/link'

export function CommonLink({ href, children }) {
  return (
    <Link
      href={href}
      target="_blank"
      className="font-normal text-black decoration-black underline-offset-2 transition-all duration-200 ease-in hover:text-inherit hover:drop-shadow-sm"
    >
      {children}
    </Link>
  )
}
