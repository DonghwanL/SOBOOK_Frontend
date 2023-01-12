import { atom } from 'recoil'
import { v4 as uuidv4 } from 'uuid'

export const SearchKeywordState = atom({
  key: `SearchKeywordState/${uuidv4()}`,
  default: '',
})
