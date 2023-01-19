import './globals.css'

import { Fira_Code } from '@next/font/google'

import { Header } from './components/Header'

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
      </body>
    </html>
  )
}