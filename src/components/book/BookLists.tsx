import { useEffect, useState } from 'react'
import { useRecoilValue } from 'recoil'
import { SearchKeywordState, fetchPageState } from '@/src/lib/store'
import { FETCH_SEARCH_BOOKS } from '@lib/api/apiClient'
import { v4 as uuidv4 } from 'uuid'
import * as S from '@components/Book/BookLists.style'
import BookListItems from '@components/Book/BookListItems'
import SearchBar from '@components/Search/SearchBar'
import Pagination from '@components/Common/Pagination/Pagination'

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
    const params = {
      query: searchKeyword || '해리포터',
      sort: 'latest',
      page: fetchPage || 1,
      size: 10,
    }

    console.log(params)

    const response = await FETCH_SEARCH_BOOKS(params)
    setBookList(response.data.documents)
    setPageCount(response.data.meta.pageable_count || 1)
    setIsLoading(true)
  }

  return (
    <>
      {isLoading && (
        <>
          <SearchBar fetchSearchBooks={fetchSearchBooks} />
          <S.BookListsWrapper>
            {bookList.map((el) => (
              <BookListItems key={uuidv4()} data={el} />
            ))}
          </S.BookListsWrapper>
          <Pagination fetchSearchBooks={fetchSearchBooks} count={pageCount} />
        </>
      )}
    </>
  )
}

export default BookLists
