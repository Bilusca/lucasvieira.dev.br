import { Metadata } from "next"
import QueryString from "qs"

import styles from './post.module.css'
import { MarkdownReader } from "../../../components/client-components/MarkdownReader"


type BlogPostPageType = {
  params: {
    slug: string
  }
}

async function getBlogPage(slug: string) {
  const query = QueryString.stringify({
    filters: {
      slug: {
        $eq: slug
      }
    },
    populate: [
      'Seo',
      'Seo.sharedImage',
      'Seo.sharedImage.media',
      'Seo.sharedImage.alt',
    ]
  }, { encodeValuesOnly: true })

  const response = await fetch(`${process.env.STRAPI_ENDPOINT}/api/posts?${query}`, { cache: 'force-cache', next: { revalidate: 1 * 60 } })
  const { data } = await response.json()

  const post = {
    id: data[0].id,
    title: data[0].attributes.title,
    description: data[0].attributes.subtitle,
    slug: data[0].attributes.slug,
    text: data[0].attributes.text,
    coverImage: {
      url: `${process.env.STRAPI_ENDPOINT}${data[0].attributes.Seo.sharedImage.media.data.attributes.formats.medium.url}`,
    },
    createdAt: data[0].attributes.createdAt
  }

  return post
}

export async function generateMetadata({ params: { slug } }: BlogPostPageType): Promise<Metadata> {
  const post = await getBlogPage(slug)

  return {
    title: `Lucas Vieira | ${post.title}`,
    description: post.description,
    openGraph: {
      url: `https://www.lucasvieira.dev/blog/${post.slug}`,
      images: [{
        url: `https://www.lucasvieira.dev/api/og-dynamic?title=${post.title}&description=${post.description}`
      }]
    },
    twitter: {
      card: 'summary_large_image',
      images: `https://www.lucasvieira.dev/api/og-dynamic?title=${post.title}&description=${post.description}`,
      title: `Lucas Vieira | ${post.title}`,
      description: post.description,
      creator: '@BiluscaVieira',
      site: 'https://www.lucasvieira.dev'
    }
  }
}

export default async function BlogPostPage({ params: { slug } }: BlogPostPageType) {
  const post = await getBlogPage(slug);

  return (
    <div>
      <div className="relative w-full h-28 lg:h-96 mb-10 border-2 border-black shadow-app-black bg-center bg-no-repeat bg-cover" style={{ backgroundImage: `url(${post?.coverImage.url})` }}>

      </div>

      <h1 className="text-4xl lg:text-6xl font-bold mb-10 lg:mb-12 text-shadow-purple">{post?.title}</h1>
      <p className="italic text-lg lg:text-2xl mb-8 lg:mb-12">{post?.description}</p>
      <article className={styles.article}>
        <MarkdownReader content={post?.text} />
      </article>
    </div>
  )
}