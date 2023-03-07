
import { Suspense } from 'react';
import { About } from "../components/About";
import { AnimatedSection } from "../components/AnimatedSection";
import { BlogSection } from "../components/BlogSection";
import { Hero } from "../components/Hero";

export const metadata = {
  title: 'Lucas Vieira | Fullstack Developer 👨‍💻',
  description: 'Desenvolvedor fullstack, com mais de 7 anos de experiência.',
  openGraph: {
    url: `https://www.lucasvieira.dev`,
    images: [{
      url: `https://www.lucasvieira.dev/api/og`
    }]
  },
  twitter: {
    card: 'summary_large_image',
    images: `https://www.lucasvieira.dev/api/og`,
    title: `Lucas Vieira | Fullstack Developer 👨‍💻`,
    description: 'Desenvolvedor fullstack, com mais de 7 anos de experiência.',
    creator: '@BiluscaVieira',
    site: 'https://www.lucasvieira.dev'
  }
}

export default async function Page() {
  return (
    <>
      <Hero />
      <About />
      <AnimatedSection />
      <Suspense fallback={
        <div className="container mx-auto py-48 h-full shadow-app-black border-2 border-black animate-pulse">
          <h5 className="text-4xl lg:text-6xl font-bold mb-10 lg:mb-12 text-shadow-purple text-center">Carregando os Posts...</h5>
        </div>
      }>
        {/* @ts-expect-error Async Server Component */}
        <BlogSection />
      </Suspense>
    </>
  )
}