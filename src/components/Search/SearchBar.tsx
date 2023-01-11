import { ChangeEvent, useState } from 'react'
import { SearchKeywordState } from '@/src/lib/store'
import { useRecoilState } from 'recoil'
import * as S from '@components/Search/SearchBar.style'

type SearchBarProps = {
  fetchSearchBooks: () => Promise<void>
}

const SearchBar = ({ fetchSearchBooks }: SearchBarProps) => {
  const [keyword, setKeyword] = useState('')
  const [searchKeyword, setSearchKeyword] = useRecoilState(SearchKeywordState)

  const onChangeKeyword = (event: ChangeEvent<HTMLInputElement>) => {
    setKeyword(event.target.value)
    setSearchKeyword(event.target.value)
  }

  const onClickSearch = () => {
    if (!searchKeyword) {
      alert('검색어를 입력 해주세요.')
      return
    }

    fetchSearchBooks()
  }

  return (
    <S.SearchWrapper>
      <S.SearchInput type="text" placeholder="검색" value={keyword} onChange={onChangeKeyword} />
      <S.SearchButton onClick={onClickSearch}>
        <S.SearchIcon />
      </S.SearchButton>
    </S.SearchWrapper>
  )
}

export default SearchBar
