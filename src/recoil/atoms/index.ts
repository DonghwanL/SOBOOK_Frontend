import { v4 as uuidv4 } from 'uuid'
import { atom, atomFamily } from 'recoil'
import { BookListsType, BookShelfType } from '@type/index'

// User
export const loginState = atom<{ isLogined: boolean; nickname: string }>({
  key: 'loginState',
  default: { isLogined: false, nickname: '' },
})

// Modal
export const modalState = atomFamily<boolean, string>({
  key: 'modalState',
  default: false,
})

// Fetch Data
export const bookListState = atom<BookListsType[]>({
  key: `bookListState/${uuidv4()}`,
  default: [],
})

export const bookDetailState = atom<BookListsType[]>({
  key: `bookDetailState/${uuidv4()}`,
  default: [],
})

export const bookShelfDetailState = atom<BookShelfType>({
  key: `bookShelfDetailState/${uuidv4()}`,
  default: {},
})

// Book Shelf
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

// Search
export const searchKeywordState = atom<string>({
  key: `searchKeywordState/${uuidv4()}`,
  default: '',
})

export const pageState = atom<number>({
  key: `pageState/${uuidv4()}`,
  default: 1,
})

export const fetchMoreState = atom<boolean>({
  key: `fetchMoreState/${uuidv4()}`,
  default: true,
})
