import { gql } from "@apollo/client";
import { NextSeo } from "next-seo";

import { client } from "../../../lib/apolloClient";
import { NEXT_SEO_DEFAULT } from "../../../next-seo.config";

type BlogPostPageType = {
  params: {
    slug: string
  }
}

async function getBlogPage(slug: string) {
  const { data } = await client.query({
    query: gql`
      query {
        blogModel(where: { slug: "${slug}" }) {
          title
          description
          keywords
        }
      }
    `,
  })

  return data.blogModel[0]
}
export default async function Head({ params: { slug } }: BlogPostPageType) {
  const post = await getBlogPage(slug);

  const updateMeta = {
    ...NEXT_SEO_DEFAULT,
    title: `Lucas Vieira | ${post?.title}`,
    description: post?.description,
    openGraph: {
      ...NEXT_SEO_DEFAULT.openGraph,
      title: `Lucas Vieira | ${post?.title}`,
      description: post?.description
    }
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