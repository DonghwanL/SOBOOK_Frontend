import { useEffect } from 'react'
import { useRecoilState } from 'recoil'
import { bookShelfListState } from '@lib/store'
import { FETCH_BOOK_SHELF_LIST } from '@/src/lib/api/bookShelf'
import { BookShelfType } from '@/src/types'
import * as S from '@components/Book/List/BookLists.style'
import BookShelfItems from '../ListItem/BookShelfListItem'
import NoDataResult from './NoDataResult'

const BookShelfList = () => {
  const [bookShelfList, setBookShelfList] = useRecoilState(bookShelfListState)

  useEffect(() => {
    fetchBookShelfList()
  }, [])

  const fetchBookShelfList = async () => {
    try {
      const response = await FETCH_BOOK_SHELF_LIST()
      // setBookShelfList(response.data)
      console.log(bookShelfList)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <S.BookListsWrapper>
      {bookShelfList.length ? (
        bookShelfList.map((el: BookShelfType) => <BookShelfItems key={String(el.id)} data={el} />)
      ) : (
        <NoDataResult />
      )}
    </S.BookListsWrapper>
  )
}

export default BookShelfList
