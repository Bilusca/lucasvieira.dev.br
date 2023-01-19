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
    description: 'Desenvolvedor fullstack, com mais de 7 anos de experiência.',
    images: [
      {
        url: `${url}api/og`,
        alt: 'Imagem do desenvolvedor Lucas Vieira',
      },
    ],
    siteName: 'Lucas Vieira | Fullstack Developer',
  },
};