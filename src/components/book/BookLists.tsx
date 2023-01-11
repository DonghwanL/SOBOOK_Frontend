import { useEffect, useState } from 'react'
import { FETCH_SEARCH_BOOKS } from '@lib/api/apiClient'
import { v4 as uuidv4 } from 'uuid'
import * as S from '@components/Book/bookLists.style'
import BookListItems from '@components/Book/BookListItems'

const BookLists = () => {
  const [bookList, setBookList] = useState([])

  useEffect(() => {
    fetchSearchBooks()
  }, [])

  const fetchSearchBooks = async () => {
    const params = {
      query: '책',
      sort: 'latest',
      page: 1,
      size: 10,
    }

    const response = await FETCH_SEARCH_BOOKS(params)
    setBookList(response.data.documents)
  }

  return (
    <S.BookListsWrapper>
      {bookList.map((el) => (
        <BookListItems key={uuidv4()} data={el} />
      ))}
    </S.BookListsWrapper>
  )
}

export default BookLists
