import axios, { AxiosInstance } from 'axios'
import { API_SERVER } from '@lib/api/config'
import { SearchParamsType } from '@type/searchParams'
import { SignUpFormType } from '@type/signUpForm'

export const apiClient: AxiosInstance = axios.create({
  baseURL: API_SERVER,
  headers: {},
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
