import Image from "next/image"

import AboutIMG from '../public/static/images/about-picture.png';

export function About() {
  return (
    <section className="bg-black py-36 -mt-20 px-6 lg:px-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between">
        <div className="w-full lg:w-5/12 mb-10 lg:mb-0">
          <Image src={AboutIMG} alt="" placeholder="blur" />
        </div>
        <div className="w-full lg:w-6/12 text-white">
          <h2 className="text-shadow-purple font-bold text-6xl lg:text-8xl tracking-tighter mb-6">Sobre</h2>
          <p>Eu sou Lucas, um desenvolvedor experiente, natural de Goiânia, com mais de 7 anos de experiência no mercado. Tenho habilidades sólidas em tecnologias como <b className="font-bold text-xl text-app-purple">React</b>, <b className="font-bold text-xl text-app-purple">Vue</b> e <b className="font-bold text-xl text-app-purple">NodeJS</b> e me dedico a entregar trabalhos de alta qualidade, com ênfase na <b className="font-bold text-xl text-app-purple">usabilidade</b>, <b className="font-bold text-xl text-app-purple">performance</b> e qualidade de código. Além disso, sou apaixonado por carros antigos, música e passar tempo de qualidade com minha família. Com minha <b className="font-bold text-xl text-app-purple">experiência</b> e habilidades técnicas, sou um profissional <b className="font-bold text-xl text-app-purple">confiável</b> e pronto para qualquer projeto de desenvolvimento, garantindo que o código seja limpo, legível e escalável. Se você está procurando por um desenvolvedor experiente e dedicado para o seu próximo projeto, não hesite em entrar em contato comigo.</p>

        </div>
      </div>
    </section>
  )
}