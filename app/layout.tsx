import './globals.css'

import { Fira_Code } from '@next/font/google'

import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { Hero } from '../components/Hero'
import { About } from '../components/About'
import { AnimatedSection } from '../components/AnimatedSection'

const firaCode = Fira_Code({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--fira-code'
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <head />
      <body className={`${firaCode.variable} font-mono`} >
        <Header />
        {children}
        <Footer />
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WNVG6KR"
          height="0" width="0" style={{ display: "none", visibility: "hidden" }}></iframe></noscript>
      </body>
    </html>
  )
}