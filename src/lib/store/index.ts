import { atom } from 'recoil'
import { v4 as uuidv4 } from 'uuid'
import { BookShelfType } from '@type/index'

// Fetch Data
export const bookListState = atom({
  key: `bookListState/${uuidv4()}`,
  default: [],
})

export const bookDetailState = atom({
  key: `bookDetailState/${uuidv4()}`,
  default: [],
})

export const bookShelfDetailState = atom<BookShelfType>({
  key: `bookShelfDetailState/${uuidv4()}`,
  default: {},
})

// Update Book Shelf
export const bookRatingState = atom<number>({
  key: `bookRatingState/${uuidv4()}`,
  default: 0,
})

export const bookStatusState = atom<string>({
  key: `bookStateState/${uuidv4()}`,
  default: '',
})

export const bookContentsState = atom<string>({
  key: `bookContentsState/${uuidv4()}`,
  default: '',
})

// Search & Pagination
export const searchKeywordState = atom<string>({
  key: `searchKeywordState/${uuidv4()}`,
  default: '',
})

export const startPageState = atom<number>({
  key: `startPageState/${uuidv4()}`,
  default: 1,
})

export const activedPageState = atom<number>({
  key: `activedPageState/${uuidv4()}`,
  default: 1,
})
