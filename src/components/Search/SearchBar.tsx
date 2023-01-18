import { ChangeEvent, useState } from 'react'
import { useRecoilState, useSetRecoilState } from 'recoil'
import { SearchKeywordState, startPageState, activedPageState, fetchPageState } from '@/src/lib/store'
import Modal from '../Common/Modal/Modal'
import ModalPortal from '../Common/Modal/ModalPortal'
import * as S from '@components/Search/SearchBar.style'

type SearchBarProps = {
  fetchSearchBooks: () => Promise<void>
}

const SearchBar = ({ fetchSearchBooks }: SearchBarProps) => {
  const [keyword, setKeyword] = useState('')
  const [isOpenModal, setIsOpenModal] = useState(false)
  const [searchKeyword, setSearchKeyword] = useRecoilState(SearchKeywordState)
  const [fetchPage, setFetchPage] = useRecoilState(fetchPageState)
  const setStartPage = useSetRecoilState(startPageState)
  const setActivedPage = useSetRecoilState(activedPageState)

  const onToggleModal = () => {
    setIsOpenModal((prev) => !prev)
  }

  const onChangeKeyword = (event: ChangeEvent<HTMLInputElement>) => {
    setKeyword(event.target.value)
    setSearchKeyword(event.target.value)
  }

  const onClickSearch = () => {
    if (!searchKeyword) {
      onToggleModal()
      return
    }

    setStartPage(1)
    setFetchPage(3)
    setActivedPage(1)
    fetchSearchBooks()
  }

  return (
    <S.SearchWrapper>
      <S.SearchInput type="text" placeholder="검색" value={keyword} onChange={onChangeKeyword} />
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
