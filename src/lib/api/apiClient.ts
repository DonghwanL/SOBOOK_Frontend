import axios, { AxiosInstance } from 'axios'
import { KAKAO_BOOK_SEARCH_API, KAKAO_API_KEY } from '@src/lib/api/config'

interface ParamsType {
  query: string
  sort: string
  page: number
  size: number
}

export const apiClient: AxiosInstance = axios.create({
  baseURL: `${KAKAO_BOOK_SEARCH_API}`,
  headers: {
    Authorization: `KakaoAK ${KAKAO_API_KEY}`,
  },
})

export const FETCH_SEARCH_BOOKS = (params: ParamsType) => {
  return apiClient.get('/v3/search/book', { params })
}
