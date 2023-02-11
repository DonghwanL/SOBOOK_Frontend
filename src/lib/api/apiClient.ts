import axios, { AxiosInstance } from 'axios'
import { API_SERVER } from '@lib/api/config'

interface ParamsType {
  query?: string
  sort?: string
  start?: number
  display?: number
  d_isbn?: string
}

export const apiClient: AxiosInstance = axios.create({
  baseURL: API_SERVER,
  headers: {},
})

export const FETCH_SEARCH_BOOKS = (params: ParamsType) => {
  return apiClient.get(`${API_SERVER}/books/search`, { params })
}

export const FETCH_SEARCH_DETAIL_BOOK = (params: ParamsType) => {
  return apiClient.get(`${API_SERVER}/books/search/${params.d_isbn}`)
}
