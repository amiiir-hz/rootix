import { API_URL } from 'src/shared/config'
import { ACCESS_TOKEN_KEY } from 'src/shared/constance/storage'
import { getCookieStorage } from '../storage/cookie'

const idToken = getCookieStorage(ACCESS_TOKEN_KEY) || 'token'
console.log({ idToken })
