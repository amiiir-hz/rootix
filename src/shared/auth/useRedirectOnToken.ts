import { useGetMaybeUser } from './UserProvider'
// import { useAuthMutation } from 'src/auth/useAuthMutation';
import { Router, useRouter } from 'next/router'
import { useCallback, useEffect } from 'react'
import { isTokenExpired } from 'src/shared/http/token'
import { getCookieStorage } from 'src/shared/storage/cookie'
import { ACCESS_TOKEN_KEY, USER_ROLE } from 'src/shared/storage/constant'
import { getInitialLocale } from 'src/shared/i18n/getInitialLocale'
import { useRedirectOnEnterOnRole } from 'src/routes'
import { useSetUser } from "src/shared/auth/UserProvider";

export function useRedirectOnToken() {
  // const { onIdToken, refreshToken } = useAuthMutation();

  const router = useRouter()

  const isAuthUrls = useCallback(() => {
    return router.asPath.includes('/auth/')
  }, [router])
  const onEnter = useCallback(async () => {
    const idToken = getCookieStorage(ACCESS_TOKEN_KEY)
    const lang = getInitialLocale()
    try {
      if (idToken) {
        if (isTokenExpired(idToken)) {
          // await refreshToken();
        } else {
          // await onIdToken(idToken);
        }
      } else if (!isAuthUrls()) {
        router.push(`/login/`, undefined, { shallow: true })
        // router.push(`/${lang}/signin//`, undefined, { shallow: true });
      }
    } catch (err) {
      console.error('error', err)
    }
  }, [])
  useEffect(() => {
    // if (isByPassUrls()) return;
    onEnter()
  }, [onEnter])
}

export function useUserLoginOrNot() {
  // const { onIdToken, refreshToken } = useAuthMutation();
  const router = useRouter()
  const setUser = useSetUser();

  const onEnter = useCallback(async () => {
    const idToken = getCookieStorage(ACCESS_TOKEN_KEY)
    const userrole = getCookieStorage(USER_ROLE)
    try {
      if (idToken) {
        
        if (isTokenExpired(idToken)) {
          // await refreshToken();
          router.push('/login')
        } else {
          setUser(JSON.parse(userrole));
        }
      }
    } catch (err) {
      console.error('error', err)
    }
  }, [])
  useEffect(() => {
    onEnter()
  }, [onEnter])
}

export function useOnUserStateChanged() {
  const user = useGetMaybeUser()

  const router = useRouter()

  useEffect(() => {
    const lang = getInitialLocale()

    if (user === 'NO_USER') {
      router.push(`/login/`, undefined, { shallow: true })
    }
  }, [user])
}

export function useOnUserEnter() {
  const router = useRouter()
  const { redirectUserOnToken } = useRedirectOnEnterOnRole()

  useEffect(() => {
    const idToken = getCookieStorage(ACCESS_TOKEN_KEY)

    if (idToken) {
      if (!isTokenExpired(idToken)) {
        redirectUserOnToken()
      } else {
        router.push(`/${getInitialLocale()}/register/`, undefined, {
          shallow: true,
        })
      }
    } else if (router.asPath === '/') {
      router.push(`/${getInitialLocale()}`, undefined, { shallow: true })
    }
  }, [])
}

const ADMIN_RESTRICTED_AREAS = ['profile', 'session']
const CLIENT_RESTRICTED_AREAS = ['profile', 'session']
const HEALER_RESTRICTED_AREAS = ['profile', 'session']
export function useAccessRestrictedArea() {
  const router = useRouter()
  const user = useGetMaybeUser()

  const onAccessRestrictedArea = useCallback(async () => {
    const idToken = getCookieStorage(ACCESS_TOKEN_KEY)
    console.log(router.pathname)

    //   if (router.pathname.includes('reported')) {
    //     if (false)
    //       router.push(`/403`, undefined, { shallow: true });
    //   }
  }, [])

  useEffect(() => {
    onAccessRestrictedArea()
  }, [onAccessRestrictedArea])
}
