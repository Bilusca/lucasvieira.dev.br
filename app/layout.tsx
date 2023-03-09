import './globals.css'

import { ReactNode } from 'react'
import { Fira_Code as FiraCode } from '@next/font/google'

import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

const firaCode = FiraCode({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--fira-code',
})

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <head />
      <body className={`${firaCode.variable} font-mono`}>
        <Header />
        {children}
        <Footer />
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WNVG6KR"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
      </body>
    </html>
  )
}
