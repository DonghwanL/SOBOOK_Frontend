import { useEffect, useState } from 'react'
import { FETCH_SEARCH_BOOKS } from '@lib/api/apiClient'
import { v4 as uuidv4 } from 'uuid'
import * as S from '@styles/bookListStyle'
import BookListItems from './BookListItems'

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
      {bookList.map((el, index) => (
        <BookListItems key={uuidv4()} data={el} index={index} />
      ))}
    </S.BookListsWrapper>
  )
}

export default BookLists
