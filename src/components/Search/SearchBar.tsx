import { ChangeEvent } from 'react'

import * as S from '@components/Search/SearchBar.style'

const SearchBar = () => {
  const onChangeKeyword = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value)
  }

  return (
    <S.SearchWrapper>
      <S.SearchInput type="text" placeholder="검색" onChange={onChangeKeyword} />
      <S.SearchButton>
        <S.SearchIcon />
      </S.SearchButton>
    </S.SearchWrapper>
  )
}

export default SearchBar
