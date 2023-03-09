import { Suspense } from 'react'
import { About } from '../components/About'
import { AnimatedSection } from '../components/AnimatedSection'
import { BlankCard } from '../components/BlankCard'
import { BlogSection } from '../components/BlogSection'
import { Hero } from '../components/Hero'

export const metadata = {
  title: 'Lucas Vieira | Fullstack Developer 👨‍💻',
  description: 'Desenvolvedor fullstack, com mais de 7 anos de experiência.',
  openGraph: {
    url: `https://www.lucasvieira.dev`,
    images: [
      {
        url: `https://www.lucasvieira.dev/api/og`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: `https://www.lucasvieira.dev/api/og`,
    title: `Lucas Vieira | Fullstack Developer 👨‍💻`,
    description: 'Desenvolvedor fullstack, com mais de 7 anos de experiência.',
    creator: '@BiluscaVieira',
    site: 'https://www.lucasvieira.dev',
  },
}

export default function Page() {
  return (
    <>
      <Hero />
      <About />
      <AnimatedSection />
      <Suspense
        fallback={
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-10">
            <BlankCard />
            <BlankCard />
            <BlankCard />
          </div>
        }
      >
        {/* @ts-expect-error Async Server Component */}
        <BlogSection />
      </Suspense>
    </>
  )
}
