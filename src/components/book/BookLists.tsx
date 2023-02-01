import { useEffect, useState } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import { searchKeywordState, bookListState } from '@lib/store'
import { FETCH_SEARCH_BOOKS } from '@lib/api/apiClient'
import { bookLists } from '@type/bookLists'
import * as S from '@components/Book/BookLists.style'
import SearchBar from '@components/Search/SearchBar'
import BookListItems from '@components/Book/BookListItems'
import NoResult from '@components/Search/NoSearchResult'

const BookLists = () => {
  const [isFetch, setIsFetch] = useState(false)
  const [bookLists, setBookLists] = useRecoilState(bookListState)
  const searchKeyword = useRecoilValue(searchKeywordState)

  useEffect(() => {
    if (bookLists.length) setIsFetch(true)
  }, [bookLists])

  const fetchSearchBooks = async () => {
    setIsFetch(false)

    const params = {
      query: searchKeyword,
      sort: 'date',
      start: 1,
    }

    try {
      const response = await FETCH_SEARCH_BOOKS(params)
      setBookLists(response.data.items)
      setIsFetch(true)
    } catch {
      console.error('Fetching Error')
    }
  }

  return (
    <>
      <SearchBar fetchSearchBooks={fetchSearchBooks} />
      {isFetch && (
        <S.BookListsWrapper>
          {bookLists.length ? (
            bookLists.map((el: bookLists) => <BookListItems key={el.isbn} data={el} />)
          ) : (
            <NoResult />
          )}
        </S.BookListsWrapper>
      )}
    </>
  )
}

export default BookLists
