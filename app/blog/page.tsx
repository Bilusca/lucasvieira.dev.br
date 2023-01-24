import { gql } from "@apollo/client"

import { BlogCard } from "../../components/BlogCard"
import { IBlogData } from "../../interfaces/Blog.interface"
import { client } from "../../lib/apolloClient"

async function getBlogData() {
  const { data } = await client.query({
    query: gql`
      query {
        blogModel(orderBy: publishedAt_DESC, first: 3) {
          id
          title
          description
          slug
          createdAt
          coverImage {
            url
          }
        }
      }
    `
  })

  return data.blogModel
}

export default async function BlogListPage() {
  const blogData: IBlogData[] = await getBlogData()

  return (
    <main>
      <h1 className="text-center text-shadow-purple font-bold text-6xl lg:text-8xl tracking-tighter mb-20 lg:mb-40">Artigos no site</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-10">
        {blogData.map(post => <BlogCard key={post.id} title={post.title} slug={post.slug} description={post.description} coverImage={post.coverImage} />)}
      </div>
    </main>
  )
}