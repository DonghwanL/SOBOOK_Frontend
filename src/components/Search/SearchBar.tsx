import { ChangeEvent, KeyboardEvent, useState } from 'react'
import { useRecoilState, useSetRecoilState } from 'recoil'
import { fetchMoreState, searchKeywordState, pageState } from '@recoil/atoms'
import Modal from '@components/Common/Modal/Modal'
import ModalPortal from '@components/Common/Modal/ModalPortal'
import * as S from '@components/Search/SearchBar.style'

type SearchBarProps = {
  fetchSearchBooks: () => Promise<void>
}

const SearchBar = ({ fetchSearchBooks }: SearchBarProps) => {
  const [isOpenModal, setIsOpenModal] = useState(false)
  const [searchKeyword, setSearchKeyword] = useRecoilState(searchKeywordState)
  const setPage = useSetRecoilState(pageState)
  const setHasMore = useSetRecoilState(fetchMoreState)

  const onToggleModal = () => setIsOpenModal((prev) => !prev)
  const onChangeKeyword = (event: ChangeEvent<HTMLInputElement>) => setSearchKeyword(event.target.value)
  const onClickSearchReset = () => setSearchKeyword('')

  const onHandleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') onClickSearch()
  }

  const onClickSearch = () => {
    if (!searchKeyword) {
      onToggleModal()
      return
    }

    setPage(1)
    setHasMore(true)
    fetchSearchBooks()
  }

  return (
    <S.SearchWrapper>
      <S.SearchInput
        type="text"
        placeholder="검색"
        value={searchKeyword}
        onChange={onChangeKeyword}
        onKeyDown={onHandleKeyDown}
      />
      {searchKeyword && (
        <S.SearchResetButton onClick={onClickSearchReset}>
          <S.SearchResetIcon />
        </S.SearchResetButton>
      )}
      <S.SearchButton onClick={onClickSearch}>
        <S.SearchIcon />
      </S.SearchButton>
      {/* Modal */}
      {isOpenModal && (
        <ModalPortal>
          <Modal onToggleModal={onToggleModal} contents="검색어를 입력 해주세요!" />
        </ModalPortal>
      )}
    </S.SearchWrapper>
  )
}

export default SearchBar
