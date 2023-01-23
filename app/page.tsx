import { gql } from "@apollo/client";
import { About } from "../components/About";
import { AnimatedSection } from "../components/AnimatedSection";
import { BlogSection } from "../components/BlogSection";
import { Hero } from "../components/Hero";
import { client } from "../lib/apolloClient";

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
            width
            height
          }
        }
      }
    `
  })

  return data.blogModel
}

export const revalidate = 60 * 60

export default async function Page() {
  const blogData = await getBlogData()

  return (
    <>
      <Hero />
      <About />
      <AnimatedSection />
      <BlogSection blogData={blogData} />
    </>
  )
}