import { NextSeo } from "next-seo";
import { NEXT_SEO_DEFAULT } from "../next-seo.config";

export default function Head() {
  return (
    <head>
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="initial-scale=1.0, width=device-width"
      ></meta>
      <NextSeo {...NEXT_SEO_DEFAULT} useAppDir={true} />
    </head>
  )
}