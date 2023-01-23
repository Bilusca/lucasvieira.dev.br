import Image from "next/image";

import ProfilePicture from '../public/static/images/my-picture.png'
import { LogoBox } from "./client-components/LogoBox";

export function Hero() {
  return (
    <main className="container mx-auto pt-20 flex flex-col lg:flex-row items-center md:justify-between lg:px-4 px-6">
      <div className="flex gap-8 flex-col w-12/12 lg:w-6/12 items-start mb-20 lg:mb-0">
        <h1 className="text-shadow-purple font-bold text-6xl lg:text-8xl tracking-tighter">FullStack Developer</h1>
        <p className="font-base font-normal">Me chamo Lucas, desenvolvedor web desde 2014, com larga experiência em Javascript. Tenho experiência com <b>Node.JS</b>, <b>React.JS</b> e outras tecnologias baseadas em <b>Javascript</b>.</p>
        <a href="https://wa.me/5562981602934?text=Ol%C3%A1%2C%20preciso%20de%20um%20site%2C%20ou%20software%20para%20minha%20empresa" target="_blank" className="flex items-center gap-2 lg:gap-6 basis-0 bg-app-purple p-5 border-[3px] border-black hover:shadow-app-black transition-all duration-500 rounded-[30px] group font-bold" rel="noreferrer">
          Fale comigo pelo WhatsApp
          <LogoBox name="whatsapp" size={15} className="w-[25px] h-[25px] bg-green-500 group-hover:shadow-app-black transition-all duration-1000 border border-black" color="#fff" />
        </a>
      </div>
      <div className="flex w-12/12 lg:w-5/12 md:justify-end">
        <div className="relative z-10">
          <LogoBox name="js" className="w-[100px] h-[100px] bg-js absolute top-2 lg:top-10 lg:animate-js text-black border-[3px] border-black" size={65} />
          <LogoBox name="react" className="w-[100px] h-[100px] bg-react absolute -bottom-6 left-[5%] text-black border-[3px] border-black lg:animate-react" />
          <LogoBox name="node" className="w-[100px] h-[100px] bg-nodejs absolute -right-2 lg:-right-7 top-2/4 text-black border-[3px] border-black lg:animate-nodejs" />
          <Image className="block lg:h-full" src={ProfilePicture} alt="" placeholder="blur" quality={100} />
        </div>
      </div>
    </main>
  )
}