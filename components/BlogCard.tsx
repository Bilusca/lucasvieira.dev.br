import Image from "next/image";
import Link from "next/link";
import { IBlogData } from "../interfaces/Blog.interface";

type BlogCardType = Pick<IBlogData, "title" | "slug" | "description" | "coverImage">

export function BlogCard({ title, slug, description, coverImage }: BlogCardType) {
  return (
    <Link className="group flex flex-col border-2 border-black hover:shadow-app-black transition-all duration-700 rounded-2xl max-w-[22.5rem]" href={`/blog/${slug}`} passHref={true}>
      <div className="relative w-full h-[17.25rem] border-b-2 border-black">
        <img src={coverImage.url} className="rounded-t-xl h-full w-full" alt={title} />
      </div>
      <div className="py-6 px-4 flex flex-col gap-6">
        <h3 className="group-hover:text-app-purple text-3xl font-bold">{title}</h3>
        <p className="text-black">{description}</p>
        <div className="flex text-app-purple text-xl font-bold">
          <span>Ler artigo</span>
          <svg className="h-5 ml-2" viewBox="0 0 48 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 11.9896C5.48125 9.31759 7.82045 6.54313 11.1423 4.88349C12.1543 4.37793 15.5051 2.48821 16.6822 3.13235C19.8919 4.88869 14.9657 13.2132 14.2344 15.1873C12.354 20.2634 12.9592 24.2275 19.5166 22.6487C26.59 20.9457 35.1757 16.8696 40.9804 12.4718C42.516 11.3083 46.6316 9.70548 42.7841 9.70548C41.4026 9.70548 35.5873 9.58397 40.0785 10.1369C40.4787 10.1862 45 10.0567 45 10.2638C45 10.7651 42.9636 12.6596 42.6552 13.3346C42.1207 14.5046 41.4957 15.2382 41.4957 16.5578" stroke="#C383FB" strokeWidth="5" strokeLinecap="round" />
          </svg>
        </div>
      </div>
    </Link>
  )
}