import { v4 as uuidv4 } from 'uuid'
import { bookLists } from '@type/bookLists'
import { atom, selectorFamily } from 'recoil'

// Fetch Data
export const bookListState = atom({
  key: `bookListState/${uuidv4()}`,
  default: [],
})

export const bookDetailSelector = selectorFamily({
  key: 'bookDetailState',
  get:
    (params: string) =>
    ({ get }) => {
      const bookList = get(bookListState)
      return bookList.filter((item: bookLists) => item.isbn === params)
    },
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
