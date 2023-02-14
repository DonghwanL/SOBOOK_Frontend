import axios, { AxiosInstance } from 'axios'
import { API_SERVER } from '@lib/api/config'
import { SearchParamsType } from '@type/searchParams'
import { SignUpFormType, LoginFormType } from '@type/formType'

export const apiClient: AxiosInstance = axios.create({
  baseURL: API_SERVER,
  timeout: 2000,
  withCredentials: true,
})

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
