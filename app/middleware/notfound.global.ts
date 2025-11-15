export default defineNuxtRouteMiddleware((to) => {
  const router = useRouter()
  const routeExists = router.getRoutes().some(r => r.path === to.path)

  if (!routeExists) {
    return navigateTo('/', { replace: true })
  }
})
