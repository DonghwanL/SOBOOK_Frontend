import { atom } from 'recoil'
import { v4 as uuidv4 } from 'uuid'

export const SearchKeywordState = atom({
  key: `SearchKeywordState/${uuidv4()}`,
  default: '',
})

export const fetchPageState = atom({
  key: `fetchPageState/${uuidv4()}`,
  default: 1,
})

export const activedPageState = atom({
  key: `activedPageState/${uuidv4()}`,
  default: 1,
})
