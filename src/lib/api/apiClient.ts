import axios, { AxiosInstance } from 'axios'
import { NAVER_CLIENT_ID, NAVER_CLIENT_SECRET } from '@lib/api/config'

interface ParamsType {
  query?: string
  sort?: string
  start?: number
  display?: number
  d_isbn?: string
}

export const apiClient: AxiosInstance = axios.create({
  headers: {
    'X-Naver-Client-Id': NAVER_CLIENT_ID,
    'X-Naver-Client-Secret': NAVER_CLIENT_SECRET,
  },
})

export const FETCH_SEARCH_BOOKS = (params: ParamsType) => {
  return apiClient.get('/api/v1/search/book.json', { params })
}

export const FETCH_SEARCH_DETAIL_BOOK = (params: ParamsType) => {
  return apiClient.get('/api/v1/search/book_adv.xml', { params })
}
