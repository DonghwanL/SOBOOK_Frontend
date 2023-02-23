import { ChangeEvent, KeyboardEvent, useState } from 'react'
import { useRecoilState, useSetRecoilState } from 'recoil'
import { searchKeywordState, startPageState, activedPageState } from '@/src/lib/store'
import Modal from '@components/Common/Modal/Modal'
import ModalPortal from '@components/Common/Modal/ModalPortal'
import * as S from '@components/Search/SearchBar.style'

type SearchBarProps = {
  fetchSearchBooks: () => Promise<void>
}

const SearchBar = ({ fetchSearchBooks }: SearchBarProps) => {
  const [isOpenModal, setIsOpenModal] = useState(false)
  const [searchKeyword, setSearchKeyword] = useRecoilState(searchKeywordState)
  const [page, setPage] = useRecoilState(startPageState)
  const setActivedPage = useSetRecoilState(activedPageState)

  const onToggleModal = () => {
    setIsOpenModal((prev) => !prev)
  }

  const onChangeKeyword = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchKeyword(event.target.value)
  }

  const onHandleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      onClickSearch()
    }
  }

  const onClickSearch = () => {
    if (!searchKeyword) {
      onToggleModal()
      return
    }

    // if (page > 1) {

    // }

    setPage(1)
    setActivedPage(1)
    fetchSearchBooks()
  }

  const onClickSearchReset = () => {
    setSearchKeyword('')
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
