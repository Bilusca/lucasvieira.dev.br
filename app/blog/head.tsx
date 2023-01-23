import { NextSeo } from "next-seo";
import { NEXT_SEO_DEFAULT } from "../../next-seo.config";

export default function Head() {
  const updateMeta = {
    ...NEXT_SEO_DEFAULT,
    title: 'Lucas Vieira | Blog 👨‍💻'
  }

  return (
    <head>
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="initial-scale=1.0, width=device-width"
      ></meta>
      <NextSeo {...updateMeta} useAppDir={true} />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://www.lucasvieira.dev/blog" />
      <meta property="twitter:title" content="Lucas Vieira | Blog 👨‍💻" />
      <meta property="twitter:description" content="Desenvolvedor fullstack, com mais de 7 anos de experiência." />
      <meta property="twitter:image" content="https://www.lucasvieira.dev/api/og" />
    </head>
  )
}