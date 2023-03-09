import QueryString from 'qs'
import { IBlogData } from '../interfaces/Blog.interface'
import { BlogBlankState } from './BlogBlankState'
import { BlogCard } from './BlogCard'

async function getBlogData() {
  try {
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

    const posts: IBlogData[] = data.map((blog: any) => ({
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
  } catch (e) {
    return null
  }
}

export async function BlogSection() {
  const posts = await getBlogData()

  return (
    <section className="container py-28 mx-auto lg:px-4 px-6">
      <h3 className="text-center text-shadow-purple font-bold text-6xl lg:text-8xl tracking-tighter mb-20 lg:mb-40">
        Alguns artigos...
      </h3>

      {!!posts && posts.length > 0 ? (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-10">
          {posts.map((post) => (
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
        <div className="flex flex-col lg:flex-row justify-center items-center gap-10">
          <BlogBlankState />
          <div>
            <p className="text-2xl mb-6">
              No momento não tem nenhum artigo aqui 😮‍💨...
            </p>
            <p className="text-2xl ">
              Mas não demora muito, daqui a pouco vem coisa boa ai 😎
            </p>
          </div>
        </div>
      )}
    </section>
  )
}
