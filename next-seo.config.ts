import type { NextSeoProps } from "next-seo";
import { checkEnvUrl } from "./lib/checkEnvUrl";

const url = checkEnvUrl()

export const NEXT_SEO_DEFAULT: NextSeoProps = {
  title: 'Lucas Vieira | Fullstack Developer 👨‍💻',
  description: 'Desenvolvedor fullstack, com mais de 7 anos de experiência.',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: url,
    title: 'Lucas Vieira | Fullstack Developer 👨‍💻',
    description: 'Open Graph Description A',
    images: [
      {
        url: `${url}api/og`,
        width: 800,
        height: 600,
        alt: 'Imagem minha usada no hero com meu título',
      },
    ],
    siteName: 'Lucas Vieira | Fullstack Developer 👨‍💻',
  },
};