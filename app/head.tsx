import { NextSeo } from "next-seo";
import Script from "next/script";
import { NEXT_SEO_DEFAULT } from "../next-seo.config";

export default function Head() {
  return (
    <head>
      <Script id="GA" strategy="beforeInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-KFYX5SLKR0" />
      <Script id="GA-TAG" strategy="beforeInteractive">{
        `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-KFYX5SLKR0');
      `}</Script>
      <Script id="gtm" strategy="afterInteractive">
        {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-WNVG6KR');`}
      </Script>
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="initial-scale=1.0, width=device-width"
      ></meta>
      <NextSeo {...NEXT_SEO_DEFAULT} useAppDir={true} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.lucasvieira.dev/" />
      <meta property="og:title" content="Lucas Vieira | Fullstack Developer 👨‍💻" />
      <meta property="og:description" content="Desenvolvedor fullstack, com mais de 7 anos de experiência." />
      <meta property="og:image" content="https://www.lucasvieira.dev/api/og" />


      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://www.lucasvieira.dev/" />
      <meta property="twitter:title" content="Lucas Vieira | Fullstack Developer 👨‍💻" />
      <meta property="twitter:description" content="Desenvolvedor fullstack, com mais de 7 anos de experiência." />
      <meta property="twitter:image" content="https://www.lucasvieira.dev/api/og" />
    </head>
  )
}