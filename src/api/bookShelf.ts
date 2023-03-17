import { apiClient } from './apiClient'
import { API_SERVER } from '@api/config'
import { CreateShelfType, UpdateShelfType } from '@type/index'

export const FETCH_BOOK_SHELF_LIST = () => {
  return apiClient.get(`${API_SERVER}/api/bookShelf`)
}

export const FETCH_BOOK_SHELF_DETAIL = (params: number) => {
  return apiClient.get(`${API_SERVER}/api/bookShelf/${params}`)
}

export const CREATE_BOOK_SHELF = (data: CreateShelfType) => {
  return apiClient.post(`${API_SERVER}/api/bookShelf`, data)
}

export const UPDATE_BOOK_STATUS = (data: UpdateShelfType) => {
  return apiClient.patch(`${API_SERVER}/api/bookShelf/status/${data.id}`, data)
}

export const UPDATE_BOOK_RATING = (data: UpdateShelfType) => {
  return apiClient.patch(`${API_SERVER}/api/bookShelf/rating/${data.id}`, data)
}

export const UPDATE_BOOK_CONTENTS = (data: UpdateShelfType) => {
  return apiClient.patch(`${API_SERVER}/api/bookShelf/contents/${data.id}`, data)
}

export const DELETE_BOOK_SHELF = (params: number) => {
  return apiClient.delete(`${API_SERVER}/api/bookShelf/${params}`)
}
