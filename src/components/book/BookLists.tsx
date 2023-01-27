import { useState } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import { searchKeywordState, fetchPageState, bookListState } from '@lib/store'
import { FETCH_SEARCH_BOOKS } from '@lib/api/apiClient'
import * as S from '@components/Book/BookLists.style'
import BookListItems from '@components/Book/BookListItems'
import SearchBar from '@components/Search/SearchBar'
import Pagination from '@components/Common/Pagination/Pagination'
import NoResult from '@components/Search/NoSearchResult'

const BookLists = () => {
  const [pageCount, setPageCount] = useState(0)
  const [isLoading, setIsLoading] = useState(false)
  const [bookList, setBookList] = useRecoilState(bookListState)
  const searchKeyword = useRecoilValue(searchKeywordState)
  const fetchPage = useRecoilValue(fetchPageState)

  const fetchSearchBooks = async () => {
    // console.log(fetchPage)
    const params = {
      query: searchKeyword,
      sort: 'date',
      start: fetchPage || 1,
    }

    const response = await FETCH_SEARCH_BOOKS(params)
    setBookList(response.data.items)
    setPageCount(response.data.total || 1)
    setIsLoading(true)
  }

  return (
    <>
      <SearchBar fetchSearchBooks={fetchSearchBooks} />
      {isLoading && (
        <>
          <S.BookListsWrapper>
            {bookList.length ? bookList.map((el) => <BookListItems key={el.isbn} data={el} />) : <NoResult />}
          </S.BookListsWrapper>
          <Pagination fetchSearchBooks={fetchSearchBooks} count={pageCount} />
        </>
      )}
    </>
  )
}

export default BookLists
