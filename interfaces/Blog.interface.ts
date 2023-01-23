export interface IBlogData {
  id: string
  title: string
  description: string
  slug: string,
  coverImage: {
    url: string
    width: number
    height: number
  }
  createdAt: Date
}