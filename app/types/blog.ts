export interface Post {
  id: string
  title: string
  slug: string
  category: string
  excerpt: string
  content: string
  image: string
  author_id: string
  created_at: string
  updated_at: string
  published: boolean
}

export interface PostInput {
  title: string
  category: string
  excerpt: string
  content: string
  image: string
  published?: boolean
}