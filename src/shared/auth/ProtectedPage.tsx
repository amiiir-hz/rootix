import { AutorizeTypes } from 'src/shared/@types/auth.type'
import { useOnUserStateChanged } from 'src/shared/auth/useRedirectOnToken'
import { useGetMaybeUser } from './UserProvider'

export function AuthenticationProvider({ children }: AppCommonChild) {
  const user = useGetMaybeUser()

  useOnUserStateChanged()

  return <>{typeof user === 'object' ? children : null}</>
}

export function AuthorizaitionProvider({
  children,
  authorizedRole,
}: AppCommonChild & { authorizedRole?: AutorizeTypes }) {
  // const user = useGetMaybeUser();

  // useOnUserStateChanged();

  // return <>{typeof user === 'object' ? children : <AppLoadingPage />}</>;

  return <>{children}</>
}
