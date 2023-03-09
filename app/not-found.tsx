import Link from 'next/link'
import { BlogBlankState } from '../components/BlogBlankState'

export const metadata = {
  title: 'Lucas Vieira | Página não encontrada',
}

export default function NotFound() {
  return (
    <main className="py-20 container mx-auto px-6 lg:px-4">
      <h1 className="text-4xl lg:text-6xl font-bold mb-10 lg:mb-12 text-shadow-purple">
        O que você procura não está aqui... <br /> Melhor voltar para o blog...{' '}
        <br /> Ou para a home 🧐
      </h1>
      <div className="flex mb-10 lg:mb-12 gap-10">
        <Link
          href="/"
          className="text-4xl font-medium underline text-black transition-all duration-300 hover:text-app-purple"
        >
          Home
        </Link>
        <Link
          href="/blog"
          className="text-4xl font-medium underline text-text-black transition-all duration-300 hover:text-app-purple"
        >
          Blog
        </Link>
      </div>
      <BlogBlankState className="lg:w-1/2 mx-auto" />
    </main>
  )
}
