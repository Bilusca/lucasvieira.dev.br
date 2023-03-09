import QueryString from 'qs'

import { IBlogData } from '../interfaces/Blog.interface'
import { BlogBlankState } from './BlogBlankState'
import { BlogCard } from './BlogCard'

async function getBlogData() {
  const query = QueryString.stringify(
    {
      sort: ['publishedAt:desc'],
      fields: ['title', 'subtitle', 'slug', 'createdAt'],
      pagination: {
        page: 1,
        pageSize: 3,
      },
      populate: [
        'Seo',
        'Seo.sharedImage',
        'Seo.sharedImage.media',
        'Seo.sharedImage.alt',
      ],
    },
    { encodeValuesOnly: true },
  )

  const response = await fetch(
    `${process.env.STRAPI_ENDPOINT}/api/posts?${query}`,
    { cache: 'force-cache', next: { revalidate: 1 * 10 } },
  )
  const { data } = await response.json()

  if (data.length < 1) {
    return []
  }

  const posts = data.map((blog: any) => ({
    id: blog.id,
    title: blog.attributes.title,
    description: blog.attributes.subtitle,
    slug: blog.attributes.slug,
    coverImage: {
      url: `${process.env.STRAPI_ENDPOINT}${blog.attributes.Seo.sharedImage.media.data.attributes.formats.small.url}`,
      width:
        blog.attributes.Seo.sharedImage.media.data.attributes.formats.small
          .width,
      height:
        blog.attributes.Seo.sharedImage.media.data.attributes.formats.small
          .height,
    },
    createdAt: blog.attributes.createdAt,
  }))

  return posts
}

export const metadata = {
  title: 'Lucas Vieira | Blog 👨‍💻',
  description: 'Desenvolvedor fullstack, com mais de 7 anos de experiência.',
  openGraph: {
    url: `https://www.lucasvieira.dev/blog/`,
    images: [
      {
        url: `https://www.lucasvieira.dev/api/og`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: `https://www.lucasvieira.dev/api/og`,
    title: `Lucas Vieira | Blog 👨‍💻`,
    description: 'Desenvolvedor fullstack, com mais de 7 anos de experiência.',
    creator: '@BiluscaVieira',
    site: 'https://www.lucasvieira.dev',
  },
}

export async function BlogPosts() {
  const blogData: IBlogData[] = await getBlogData()

  return (
    <>
      {blogData.length ? (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-5 lg:gap-x-10">
          {blogData.map((post) => (
            <BlogCard
              key={post.id}
              title={post.title}
              slug={post.slug}
              description={post.description}
              coverImage={post.coverImage}
            />
          ))}
        </div>
      ) : (
        <div className="w-full flex items-center justify-center">
          <h3 className="text-center text-3xl font-semibold">
            Nenhum artigo encontrado
          </h3>
          <BlogBlankState className="w-1/2" />
        </div>
      )}
    </>
  )
}
