import { Middleware } from '@nuxt/types'

const authMiddleware: Middleware = async function (context) {
  const { redirect, $fire } = context

  if ($fire.auth.currentUser == null) {
    redirect('/signin')
  }
}

export default Object.freeze(authMiddleware)
