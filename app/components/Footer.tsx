import { LogoBox } from "./client-components/LogoBox";

export function Footer() {
  return (
    <footer className="bg-black py-4 px-6 lg:px-0">
      <div className="flex flex-col lg:flex-row items-center justify-between container mx-auto">
        <span className="text-sm italic text-white mb-5 lg:mb-0">Feito com <a className="text-base font-bold hover:text-app-purple" href="https://nextjs.org/" target="_blank">Next.js</a> e 💜</span>
        <ul className="flex items-center gap-6 text-white text-sm">
          <li>
            <a href="https://github.com/Bilusca" target="_blank"><LogoBox className="border-[2px] border-white p-2 hover:shadow-[2px_2px_0] hover:shadow-app-purple hover:border-app-purple transition-all duration-300 text-white hover:text-app-purple" size={20} name="github" /></a>
          </li>
          <li><a href="https://www.linkedin.com/in/lucas-assis-vieira/" target="_blank"><LogoBox className="border-[2px] border-white p-2 hover:shadow-[2px_2px_0] hover:shadow-app-purple hover:border-app-purple transition-all duration-300 text-white hover:text-app-purple" size={20} name="linkedin" /></a></li>
          <li><a href="https://www.instagram.com/bilusca/" target="_blank"><LogoBox className="border-[2px] border-white p-2 hover:shadow-[2px_2px_0] hover:shadow-app-purple hover:border-app-purple transition-all duration-300 text-white hover:text-app-purple" size={20} name="instagram" /></a></li>
        </ul>
      </div>
    </footer>
  )
}