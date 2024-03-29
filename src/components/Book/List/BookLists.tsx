import _ from 'lodash'
import { useEffect, useState } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import { searchKeywordState, bookListState, pageState, fetchMoreState } from '@recoil/atoms'
import { FETCH_SEARCH_BOOKS } from '@api/books'
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
  const [page, setPage] = useRecoilState(pageState)
  const [hasMore, setHasMore] = useRecoilState(fetchMoreState)
  const [bookLists, setBookLists] = useRecoilState(bookListState)
  const searchKeyword = useRecoilValue(searchKeywordState)

  const nextPage = () => setPage((prev) => prev + 10)

  useEffect(() => {
    if (bookLists.length) setIsFetch(true)
  }, [bookLists])

  useEffect(() => {
    if (page >= 11) fetchMoreData()
  }, [page])

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
      start: page,
    }

    try {
      const response = await FETCH_SEARCH_BOOKS(params)

      if (response.data.total <= page) {
        setHasMore(false)
        setPage(1)
        return
      }

      const mergeArr = [...bookLists, ...response.data.items]
      const filterBookArr = _.uniqBy(mergeArr, 'isbn')

      setTimeout(() => {
        setBookLists(filterBookArr)
      }, 1500)
    } catch {
      console.error('More Fetching Error')
    }
  }

  return (
    <>
      <SearchBar fetchSearchBooks={fetchSearchBooks} />
      {isFetch && (
        <InfiniteScroll
          dataLength={bookLists.length}
          next={nextPage}
          hasMore={hasMore}
          loader={<Loader />}
          endMessage={<S.BookListsNoMoreData>모든 리스트를 불러 왔습니다. 🤔</S.BookListsNoMoreData>}>
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
