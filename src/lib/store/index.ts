import { atom } from 'recoil'
import { v4 as uuidv4 } from 'uuid'

// Fetch Data
export const bookListState = atom({
  key: `bookListState/${uuidv4()}`,
  default: [],
})

export const bookDetailState = atom({
  key: `bookDetailState/${uuidv4()}`,
  default: [],
})

export const bookShelfListState = atom({
  key: `bookShelfListState/${uuidv4()}`,
  default: [],
})

// Search & Pagination
export const searchKeywordState = atom({
  key: `searchKeywordState/${uuidv4()}`,
  default: '',
})

export const startPageState = atom({
  key: `startPageState/${uuidv4()}`,
  default: 1,
})

export const activedPageState = atom({
  key: `activedPageState/${uuidv4()}`,
  default: 1,
})
