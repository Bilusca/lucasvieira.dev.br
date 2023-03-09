'use client'
import Image from "next/image";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

const ImageToRender = ({ ...props }) => {
  return (
    <div className="my-6 lg:my-10 mx-auto flex items-center justify-center">
      <figure>
        <Image src={props.src as string} width={750} height={513} alt={props.alt} className="border-4 border-black shadow-app-black" />
        <figcaption className="text-center mt-4 text-sm italic text-gray-500">{props.alt}</figcaption>
      </figure>
    </div>
  )
}

export function MarkdownReader({ content }: { content: string }) {
  return (
    <ReactMarkdown
      components={{
        p: ({ node, children }) => {
          /* @ts-ignore */
          if (Object.hasOwn(node.children[0], 'tagName') && node.children[0].tagName === 'img') {
            const image = node.children[0]

            { /* @ts-ignore */ }
            return <ImageToRender width={750} height={513} src={image.properties.src} alt={image.properties.alt} />
          }

          return <p>{children}</p>
        },
        a: ({ ...props }) => <a {...props} className="font-semibold text-app-purple text-xl transition-all duration-300 hover:text-purple-800" target="_blank" rel="noreferrer noopener" />
      }}

    >
      {content}
    </ReactMarkdown>
  )
}