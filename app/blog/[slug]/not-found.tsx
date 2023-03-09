import Link from "next/link";

export const metadata = {
  title: 'Lucas Vieira | Página não encontrada'
}

export default function NotFound() {
  return (
    <main className="py-20 container mx-auto px-6 lg:px-4">
      <h1 className="text-4xl lg:text-6xl font-bold mb-10 lg:mb-12 text-shadow-purple">O que você procura não está aqui... Melhor voltar para o blog</h1>
      <Link href="/blog">Blog</Link>
    </main>
  )
}