import { atom } from 'recoil'
import { v4 as uuidv4 } from 'uuid'
import { BookListsType, BookShelfType } from '@type/index'

// Fetch Data
export const bookListState = atom<BookListsType[]>({
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

// Book Shelf

export const userNameState = atom<string>({
  key: `userNameState/${uuidv4()}`,
  default: '',
})

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
