import { ReactNode } from "react";

export default function RootLayoutBlog({ children }: { children: ReactNode }) {
  return (
    <main className="py-20 container mx-auto px-6 lg:px-4">
      {children}
    </main>
  )
}