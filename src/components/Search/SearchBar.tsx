import { ChangeEvent, useState } from 'react'
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
  const setStartPage = useSetRecoilState(startPageState)
  const setActivedPage = useSetRecoilState(activedPageState)

  const onToggleModal = () => {
    setIsOpenModal((prev) => !prev)
  }

  const onChangeKeyword = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchKeyword(event.target.value)
  }

  const onClickSearch = () => {
    if (!searchKeyword) {
      onToggleModal()
      return
    }

    setStartPage(1)
    setActivedPage(1)
    fetchSearchBooks()
  }

  const onClickSearchReset = () => {
    setSearchKeyword('')
  }

  return (
    <S.SearchWrapper>
      <S.SearchInput type="text" placeholder="검색" value={searchKeyword} onChange={onChangeKeyword} />
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
          <Modal onToggleModal={onToggleModal}>검색어를 입력 해주세요!</Modal>
        </ModalPortal>
      )}
    </S.SearchWrapper>
  )
}

export default SearchBar
