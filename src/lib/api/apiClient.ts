import axios, { AxiosInstance } from 'axios'

export const apiClient: AxiosInstance = axios.create({
  baseURL: `BASE_URL`,
  headers: {
    'Content-Type': 'application/json',
  },
})
