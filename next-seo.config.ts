import type { NextSeoProps } from "next-seo";
import { checkEnvUrl } from "./lib/checkEnvUrl";

const url = checkEnvUrl()

export const NEXT_SEO_DEFAULT: NextSeoProps = {
  title: 'Lucas Vieira | Fullstack Developer 👨‍💻',
  description: 'Desenvolvedor fullstack, com mais de 7 anos de experiência.',
};