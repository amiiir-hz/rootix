import { API_URL } from 'src/shared/config'
import axios from 'axios'
import { ACCESS_TOKEN_KEY } from 'src/shared/storage/constant'
import { getCookieStorage } from 'src/shared/storage/cookie'

const idToken = getCookieStorage(ACCESS_TOKEN_KEY)

const JSON_HEADERS = {
  'Content-Type': 'multipart/form-data',
  // 'Content-Type': 'application/json; charset=utf-8  ',
  Authorization: idToken ? `Bearer ${idToken}` : null,
}

export default function fetchApi(
  method = 'GET',
  url: string,
  data = {},
  params = {},
  headers = JSON_HEADERS
) {
  axios.interceptors.request.use((config) => {
    config.baseURL = API_URL
    config.validateStatus = (status) => status <= 405 && status >= 200

    return config
  })

  return axios.request({
    url,
    data,
    method,
    headers,
    params,
  })
}
