import { useEffect, useState } from 'react'
import { useRecoilValue } from 'recoil'
import { SearchKeywordState, fetchPageState } from '@/src/lib/store'
import { FETCH_SEARCH_BOOKS } from '@lib/api/apiClient'
import * as S from '@components/Book/BookLists.style'
import BookListItems from '@components/Book/BookListItems'
import SearchBar from '@components/Search/SearchBar'
import Pagination from '@components/Common/Pagination/Pagination'
import NoResult from '@components/Search/NoSearchResult'

const BookLists = () => {
  const [bookList, setBookList] = useState([])
  const [pageCount, setPageCount] = useState(0)
  const [isLoading, setIsLoading] = useState(false)
  const searchKeyword = useRecoilValue(SearchKeywordState)
  const fetchPage = useRecoilValue(fetchPageState)

  useEffect(() => {
    fetchSearchBooks()
  }, [])

  const fetchSearchBooks = async () => {
    console.log(fetchPage)
    const params = {
      query: searchKeyword || '해리포터',
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
      {isLoading && (
        <>
          <SearchBar fetchSearchBooks={fetchSearchBooks} />
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
