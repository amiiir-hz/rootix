import { useRouter } from 'next/router'
import { useCallback } from 'react'
import { getInitialLocale } from 'src/shared/i18n/getInitialLocale'
import { NO_QUERY_ID } from './route.constant'
import { useGetUser } from 'src/shared/auth/UserProvider'
import { UserType } from 'src/shared/@types/user.type'

export function useRedirectOnEnterOnRole() {
  const router = useRouter()
  const lang = getInitialLocale()
  const user = useGetUser()

  const redirectUserOnSignup = useCallback(() => {
    router.push(`/`, undefined, { shallow: true })
  }, [lang, router])

  const redirectUserOnEnter = () => {
    router.push('/')
  }

  const redirectUserOnToken = () => {
    const tailRoute = 'dashboard'

    router.push(`/`, undefined, { shallow: true })
  }
  const redirectUserOnLogin = (passedUser?: UserType) => {
    const tailRoute = 'dashboard'

    router.push(`/`, undefined, { shallow: true })
  }

  return {
    redirectUserOnEnter,
    redirectUserOnLogin,
    redirectUserOnToken,
    redirectUserOnSignup,
  }
}

export const useGetIdFromUrl = () => {
  const router = useRouter()
  const id = router.query['id']
  if (id) return +id
  return NO_QUERY_ID
}

export function getRootPath(path: string) {
  return path.match(/\[lang\]\/(.*?)(\/|$)/)?.[1] || 'dashboard'
}

export function useRedirectToPage() {
  const router = useRouter()
  const dir = getRootPath(router.pathname)
  const rootPath = `/${router.query.lang}/${dir}/`

  function redirectToRootPage() {
    redirect(rootPath)
  }

  function redirectToAddPage() {
    redirect(`${rootPath}add/`)
  }

  function redirectToEditPage(id: number | string) {
    redirect(`${rootPath}edit/${id ? `?id=${id}` : ''}`)
  }

  function redirectToViewPage(id: number | string) {
    redirect(`${rootPath}view/${id ? `?id=${id}` : ''}`)
  }

  function redirect(path: string) {
    router.push(path, undefined, { shallow: true })
  }

  return {
    redirectToRootPage,
    redirectToAddPage,
    redirectToEditPage,
    redirectToViewPage,
    redirect,
  }
}
