import { apiClient } from './apiClient'
import { API_SERVER } from '@lib/api/config'
import { CreateShelfType } from '@type/index'

export const CREATE_BOOK_SHELF = (data: CreateShelfType) => {
  return apiClient.post(`${API_SERVER}/api/bookShelf`, data)
}

export const FETCH_BOOK_SHELF_LIST = () => {
  return apiClient.get(`${API_SERVER}/api/bookShelf`)
}
