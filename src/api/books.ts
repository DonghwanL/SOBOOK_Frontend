import { apiClient } from './apiClient'
import { API_SERVER } from '@api/config'
import { SearchParamsType } from '@type/index'

export const FETCH_SEARCH_BOOKS = (params: SearchParamsType) => {
  return apiClient.get(`${API_SERVER}/api/books/search`, { params })
}

export const FETCH_SEARCH_DETAIL_BOOK = (params: SearchParamsType) => {
  return apiClient.get(`${API_SERVER}/api/books/search/${params.d_isbn}`)
}
