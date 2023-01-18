import { MouseEvent } from 'react'
import { useRecoilState, useSetRecoilState } from 'recoil'
import { fetchPageState, startPageState, activedPageState } from '@/src/lib/store'
import * as S from '@components/Common/Pagination/Pagination.style'

interface PaginationProps {
  count?: number
  fetchSearchBooks: () => Promise<void>
}

const Pagination = ({ count, fetchSearchBooks }: PaginationProps) => {
  const [startPage, setStartPage] = useRecoilState(startPageState)
  const [activedPage, setActivedPage] = useRecoilState(activedPageState)
  const lastPage = count ? Math.ceil(count / 10) : 0
  const setFetchPage = useSetRecoilState(fetchPageState)

  const onClickPage = (event: MouseEvent<HTMLSpanElement>) => {
    const activedPage = Number(event.currentTarget.id)
    setActivedPage(activedPage)
    setFetchPage(activedPage)
    fetchSearchBooks()
  }

  const onClickPrevPage = () => {
    if (startPage === 1) return
    setStartPage(startPage - 10)
    setActivedPage(startPage - 10)
    setFetchPage(startPage - 10)
    fetchSearchBooks()
  }

  const onClickNextPage = () => {
    if (startPage + 10 <= lastPage) {
      setStartPage(startPage + 10)
      setActivedPage(startPage + 10)
      setFetchPage(startPage + 10)
      fetchSearchBooks()
    }
  }

  return (
    <S.PaginationWrapper>
      <S.PaginationMoveButton onClick={onClickPrevPage}>{'〈'}</S.PaginationMoveButton>
      {new Array(10)
        .fill(1)
        .filter((_, index) => {
          const currentPage = startPage + index
          return currentPage <= lastPage
        })
        .map((_, index) => (
          <S.PageItems
            key={startPage + index}
            id={String(startPage + index)}
            onClick={onClickPage}
            isActive={startPage + index === activedPage}>
            {startPage + index}
          </S.PageItems>
        ))}
      <S.PaginationMoveButton onClick={onClickNextPage}>{'〉'}</S.PaginationMoveButton>
    </S.PaginationWrapper>
  )
}

export default Pagination
