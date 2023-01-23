'use client'
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

export function MarkdownReader({ content }: { content: string }) {
  return (
    <ReactMarkdown>{content}</ReactMarkdown>
  )
}