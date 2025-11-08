export default defineNuxtRouteMiddleware(async () => {
  const user = useSupabaseUser()
  const supabase = useSupabaseClient()

  // Check current session
  const { data: { session } } = await supabase.auth.getSession()

  // If user is authenticated, redirect to admin
  if (user.value || session) {
    return navigateTo('/admin')
  }
})