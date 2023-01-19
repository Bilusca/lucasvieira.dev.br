import { NextSeo } from "next-seo";
import Script from "next/script";
import { NEXT_SEO_DEFAULT } from "../next-seo.config";

export default function Head() {
  return (
    <head>
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
    </head>
  )
}