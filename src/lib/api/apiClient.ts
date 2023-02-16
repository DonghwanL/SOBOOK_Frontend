import mem from 'mem'
import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'
import { API_SERVER } from '@lib/api/config'
import { SignUpFormType, LoginFormType, SearchParamsType, CreateShelfType } from '@type/index'
import { getCookie, removeCookie, setCookie } from '@utils/cookie'

export const apiClient: AxiosInstance = axios.create({
  baseURL: API_SERVER,
  timeout: 100000000,
  withCredentials: true,
  headers: { 'Content-Type': 'application/json' },
})

apiClient.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    const token = localStorage.getItem('accessToken')

    if (token) {
      config.headers = {
        Authorization: `Bearer ${token}`,
      }
    }

    return config
  },
  (error) => Promise.reject(error),
)

apiClient.interceptors.response.use(
  (response) => {
    return response
  },
  async (error) => {
    const {
      config,
      response: { status },
    } = error

    if (status === 401) {
      config.sent = true
      const accessToken = await getRefreshToken()

      if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`
        return axios(config)
      }

      return Promise.reject(error)
    }
  },
)

const getRefreshToken = mem(
  async (): Promise<string | void> => {
    try {
      const refreshToken = getCookie('refreshToken')

      console.log(refreshToken)

      const result = await apiClient.post(`${API_SERVER}/api/auth/refresh`, {
        headers: { authorization: `Bearer ${refreshToken}` },
      })

      const { access_token, refresh_token, nickname } = result.data

      setCookie('refreshToken', refresh_token)
      localStorage.setItem('accessToken', JSON.stringify(access_token))
      localStorage.setItem('nickname', JSON.stringify(nickname))

      return access_token
    } catch (e) {
      localStorage.removeItem('accessToken')
      removeCookie('refreshToken')
    }
  },
  { maxAge: 1000 },
)

export const FETCH_SEARCH_BOOKS = (params: SearchParamsType) => {
  return apiClient.get(`${API_SERVER}/api/books/search`, { params })
}

export const FETCH_SEARCH_DETAIL_BOOK = (params: SearchParamsType) => {
  return apiClient.get(`${API_SERVER}/api/books/search/${params.d_isbn}`)
}

export const USER_SIGN_UP = (data: SignUpFormType) => {
  return apiClient.post(`${API_SERVER}/api/auth/signup`, data)
}

export const USER_EMAIL_CHECK = (param: SignUpFormType) => {
  return apiClient.get(`${API_SERVER}/api/auth/${param.email}`)
}

export const USER_LOGIN = (data: LoginFormType) => {
  return apiClient.post(`${API_SERVER}/api/auth/login`, data)
}

export const USER_LOGOUT = () => {
  return apiClient.post(`${API_SERVER}/api/auth/logout`)
}

export const CREATE_BOOK_SHELF = (data: CreateShelfType) => {
  return apiClient.post(`${API_SERVER}/api/bookShelf`, data)
}
