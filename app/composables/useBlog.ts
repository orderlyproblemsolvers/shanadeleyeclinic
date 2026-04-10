import type { Post, PostInput } from '~/app/types/blog'

export const useBlog = () => {
  const supabase = useSupabaseClient()
  const user = useSupabaseUser()

  // Generate slug from title
  const generateSlug = (title: string): string => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim()
  }

  // Get all published posts (public)
  const getPublishedPosts = async (limit?: number) => {
    const query = supabase
      .from('posts')
      .select('*')
      .eq('published', true)
      .order('created_at', { ascending: false })

    if (limit) {
      query.limit(limit)
    }

    const { data, error } = await query

    if (error) {
      console.error('Supabase Error (getPublishedPosts):', error.message)
      return [] // SSR Safe Fallback
    }

    return data as Post[]
  }

  // Get all posts by current user (admin only)
  const getMyPosts = async () => {
    if (!user.value) {
      console.error('User not authenticated')
      return [] // SSR Safe Fallback
    }

    const { data, error } = await supabase
      .from('posts')
      .select('*')
      .order('created_at', { ascending: false })

    if (error) {
      console.error('Supabase Error (getMyPosts):', error.message)
      return [] // SSR Safe Fallback
    }

    return data as Post[]
  }

  // Get single post by slug (public)
  const getPostBySlug = async (slug: string) => {
    const { data, error } = await supabase
      .from('posts')
      .select('*')
      .eq('slug', slug)
      .eq('published', true)
      .single()

    if (error) {
      console.error(`Supabase Error (getPostBySlug for ${slug}):`, error.message)
      return null // SSR Safe Fallback
    }

    return data as Post
  }

  // Get single post by ID (for editing)
  const getPostById = async (id: string) => {
    if (!user.value) {
      console.error('User not authenticated')
      return null
    }

    const { data, error } = await supabase
      .from('posts')
      .select('*')
      .eq('id', id)
      .single()

    if (error) {
      console.error(`Supabase Error (getPostById for ${id}):`, error.message)
      return null // SSR Safe Fallback
    }

    return data as Post
  }

  // Create new post (admin only)
  const createPost = async (postData: PostInput) => {
    if (!user.value) throw new Error('User not authenticated')

    const slug = generateSlug(postData.title)

    const { data, error } = await supabase
      .from('posts')
      .insert([
        {
          ...postData,
          slug,
          published: postData.published ?? true
        }
      ])
      .select()
      .single()

    if (error) {
      console.error('Error creating post:', error.message)
      throw error // Throwing here is fine because this is a client-side mutation
    }

    return data as Post
  }

  // Update post (admin only)
  const updatePost = async (id: string, postData: Partial<PostInput>) => {
    if (!user.value) throw new Error('User not authenticated')

    const updateData: any = { ...postData }

    if (postData.title) {
      updateData.slug = generateSlug(postData.title)
    }

    const { data, error } = await supabase
      .from('posts')
      .update(updateData)
      .eq('id', id)
      .select()
      .single()

    if (error) {
      console.error('Error updating post:', error.message)
      throw error
    }

    return data as Post
  }

  // Delete post (admin only)
  const deletePost = async (id: string) => {
    if (!user.value) throw new Error('User not authenticated')

    const { error } = await supabase
      .from('posts')
      .delete()
      .eq('id', id)

    if (error) {
      console.error('Error deleting post:', error.message)
      throw error
    }

    return true
  }

  return {
    generateSlug,
    getPublishedPosts,
    getMyPosts,
    getPostBySlug,
    getPostById,
    createPost,
    updatePost,
    deletePost
  }
}