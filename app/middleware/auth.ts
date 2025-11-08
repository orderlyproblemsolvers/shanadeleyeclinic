export default defineNuxtRouteMiddleware(async () => {
  const user = useSupabaseUser()
  const supabase = useSupabaseClient()
  
  // Create a promise that resolves when we have a definitive auth state
  const authCheckPromise = new Promise<boolean>((resolve) => {
    // If user is already loaded, resolve immediately
    if (user.value !== undefined) {
      resolve(!!user.value)
      return
    }

    // Otherwise, wait for the session to be checked
    const unwatch = watch(user, (newUser) => {
      if (newUser !== undefined) {
        unwatch()
        resolve(!!newUser)
      }
    }, { immediate: true })

    // Timeout after 5 seconds to prevent infinite waiting
    setTimeout(() => {
      unwatch()
      resolve(false)
    }, 5000)
  })

  // Also manually check the session to avoid race conditions
  const { data: { session } } = await supabase.auth.getSession()
  const isAuthenticated = await authCheckPromise

  // Double-check with both methods to ensure accuracy
  const isActuallyAuthenticated = isAuthenticated && !!session

  if (!isActuallyAuthenticated) {
    return navigateTo('/login')
  }
})