import { gql } from "@apollo/client"

import styles from './post.module.css'
import { MarkdownReader } from "../../../components/client-components/MarkdownReader"
import { client } from "../../../lib/apolloClient"

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
          content {
            markdown
          }
          coverImage {
            url
          }
        }
      }
    `,
  })

  return data.blogModel[0]
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
        <MarkdownReader content={post?.content.markdown} />
      </article>
    </div>
  )
}