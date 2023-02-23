import { useEffect, useState } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import { searchKeywordState, bookListState, startPageState } from '@lib/store'
import { FETCH_SEARCH_BOOKS } from '@lib/api/books'
import { BookListsType } from '@type/bookLists.type'
import InfiniteScroll from 'react-infinite-scroll-component'
import * as S from '@components/Book/List/BookLists.style'
import SearchBar from '@components/Search/SearchBar'
import BookListItems from '@components/Book/ListItem/BookListItems'
import NoResult from '@components/Search/NoSearchResult'
import Loader from '@components/Common/Loader/Loader'

const BookLists = () => {
  const [isFetch, setIsFetch] = useState<boolean>(false)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [page, setPage] = useRecoilState(startPageState)
  const [bookLists, setBookLists] = useRecoilState(bookListState)
  const searchKeyword = useRecoilValue(searchKeywordState)

  useEffect(() => {
    if (bookLists.length) setIsFetch(true)
  }, [bookLists])

  const fetchSearchBooks = async () => {
    setIsLoading(true)
    setIsFetch(false)

    const params = {
      query: searchKeyword,
      sort: 'date',
      start: 1,
    }

    try {
      const response = await FETCH_SEARCH_BOOKS(params)
      setBookLists(response.data.items)
      setIsLoading(false)
      setIsFetch(true)
    } catch {
      console.error('Fetching Error')
    }
  }

  const fetchMoreData = async () => {
    const params = {
      query: searchKeyword,
      sort: 'date',
      start: 2,
    }
    try {
      const response = await FETCH_SEARCH_BOOKS(params)
      setBookLists((prev) => [...prev, ...response.data.items])
    } catch {
      console.error('Fetching Error')
    }
  }

  return (
    <>
      <SearchBar fetchSearchBooks={fetchSearchBooks} />
      {isFetch && (
        <InfiniteScroll dataLength={bookLists.length} next={fetchMoreData} hasMore={true} loader={<Loader />}>
          <S.BookListsWrapper>
            {bookLists.length ? (
              bookLists.map((el: BookListsType) => <BookListItems key={el.isbn} data={el} />)
            ) : (
              <NoResult />
            )}
          </S.BookListsWrapper>
        </InfiniteScroll>
      )}
      {isLoading && <Loader />}
    </>
  )
}

export default BookLists
