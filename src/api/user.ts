import { apiClient } from './apiClient'
import { API_SERVER } from '@api/config'
import { LoginFormType, SignUpFormType } from '@type/index'

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
