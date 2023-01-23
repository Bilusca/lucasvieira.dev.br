import Link from "next/link";
import { IBlogData } from "../interfaces/Blog.interface";
import { BlogBlankState } from "./BlogBlankState";
import { BlogCard } from "./BlogCard";

type BlogSection = {
  blogData: IBlogData[]
}

export function BlogSection({ blogData }: BlogSection) {
  return (
    <section className="container py-28 mx-auto lg:px-4 px-6">
      <h3 className="text-center text-shadow-purple font-bold text-6xl lg:text-8xl tracking-tighter mb-20 lg:mb-40">Alguns artigos...</h3>

      {blogData.length ? (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-10">
          {blogData.map(post => <BlogCard key={post.id} title={post.title} slug={post.slug} description={post.description} coverImage={post.coverImage} />)}
        </div>
      ) : (
        <div className="flex flex-col lg:flex-row justify-center items-center gap-10">
          <BlogBlankState />
          <div>
            <p className="text-2xl mb-6">No momento não tem nenhum artigo aqui 😮‍💨...</p>
            <p className="text-2xl ">Mas não demora muito, daqui a pouco vem coisa boa ai 😎</p>
          </div>
        </div>
      )}

    </section>
  )
}