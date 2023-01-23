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
    <div className='relative'>
      <nav className="hidden lg:block">
        <ul className="flex gap-7 items-center">
          <Link href="/" passHref={true}>
            <li className="text-2xl font-medium hover:text-app-purple">
              Home
            </li>
          </Link>
          {/* <li className="text-2xl font-medium">Sobre</li> */}
          <Link href="/blog" passHref={true}>
            <li className="text-2xl font-medium hover:text-app-purple">Blog</li>
          </Link>
          {/* <li className="text-2xl font-medium">Contato</li> */}
        </ul>
      </nav>
      <button className='flex lg:hidden items-center justify-center p-1 border border-black' onClick={handleMenu}>
        <AiOutlineMenu size={20} color="#000" />
      </button>
      <nav ref={navigation} className="fixed top-0 right-0 h-screen w-screen p-4 bg-white z-20 lg:hidden translate-x-full transition-all duration-500">
        <button onClick={handleMenu} className="p-1 items-center justify-center border border-black flex ml-auto mb-5">
          <AiOutlineClose size={20} color="#000" />
        </button>
        <ul className="flex flex-col gap-4 items-center">
          <Link passHref={true} href="/" onClick={handleMenu}>
            <li className="text-2xl font-medium">Home</li>
          </Link>
          {/* <li className="text-2xl font-medium">Sobre</li> */}
          <Link passHref={true} href="/blog" onClick={handleMenu}>
            <li className="text-2xl font-medium">Blog</li>
          </Link>
          {/* <li className="text-2xl font-medium">Contato</li> */}
        </ul>
      </nav>
    </div>
  )
}