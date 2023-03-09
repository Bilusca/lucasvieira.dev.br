'use client'
import Link from 'next/link'
import { useRef } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'

export function Navigation() {
  const navigation = useRef<HTMLDivElement>(null)

  function handleMenu() {
    if (navigation?.current) {
      navigation.current.classList.toggle('translate-x-full')
    }
  }

  return (
    <div className="relative">
      <nav className="hidden lg:block">
        <ul className="flex gap-7 items-center">
          <li>
            <Link
              href="/"
              passHref={true}
              className="text-2xl font-medium hover:text-app-purple"
              title="Home"
              aria-label="Link para a Home"
            >
              Home
            </Link>
          </li>
          {/* <li className="text-2xl font-medium">Sobre</li> */}

          <li>
            <Link
              href="/blog"
              className="text-2xl font-medium hover:text-app-purple"
              passHref={true}
              title="Blog"
              aria-label="Link para o Blog"
            >
              Blog
            </Link>
          </li>

          {/* <li className="text-2xl font-medium">Contato</li> */}
        </ul>
      </nav>
      <button
        className="flex lg:hidden items-center justify-center p-1 border border-black"
        onClick={handleMenu}
        role="button"
        title="Botão do menu"
        aria-label="Botão do menu"
      >
        <AiOutlineMenu size={20} color="#000" />
      </button>
      <nav
        ref={navigation}
        className="fixed top-0 right-0 h-screen w-screen p-4 bg-white z-20 lg:hidden translate-x-full transition-all duration-500"
      >
        <button
          onClick={handleMenu}
          className="p-1 items-center justify-center border border-black flex ml-auto mb-5"
          role="button"
          title="Botão de fechar o menu"
          aria-label="Botão de fechar o menu"
        >
          <AiOutlineClose size={20} color="#000" />
        </button>
        <ul className="flex flex-col gap-4 items-center">
          <li>
            <Link
              className="text-2xl font-medium"
              passHref={true}
              href="/"
              onClick={handleMenu}
            >
              Home
            </Link>
          </li>
          {/* <li className="text-2xl font-medium">Sobre</li> */}
          <li>
            <Link
              className="text-2xl font-medium"
              passHref={true}
              href="/blog"
              onClick={handleMenu}
            >
              Blog
            </Link>
          </li>
          {/* <li className="text-2xl font-medium">Contato</li> */}
        </ul>
      </nav>
    </div>
  )
}
