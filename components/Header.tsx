import Link from 'next/link'
import { Navigation } from './client-components/Navigation'
import { Logo } from './Logo'

export function Header() {
  return (
    <header className="container mx-auto py-5 flex flex-wrap justify-between lg:px-4 px-6">
      <Link href="/" passHref={true} title="Home" aria-label="Link para a Home">
        <Logo className="h-6 lg:h-10" />
      </Link>
      <Navigation />
    </header>
  )
}
