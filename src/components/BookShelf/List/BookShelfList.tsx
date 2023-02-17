import { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'
import { bookShelfListState } from '@lib/store'
import { FETCH_BOOK_SHELF_LIST } from '@/src/lib/api/bookShelf'
import { BookShelfType } from '@/src/types'
import * as S from '@components/BookShelf/List/BookShelfList.style'
import BookShelfItems from '../ListItem/BookShelfListItem'
import NoDataResult from './NoDataResult'

const BookShelfList = () => {
  const [userName, setUserName] = useState('')
  const [bookShelfList, setBookShelfList] = useRecoilState(bookShelfListState)

  useEffect(() => {
    const userName = localStorage.getItem('userInfo')
    if (userName) setUserName(userName)
    fetchBookShelfList()
  }, [])

  const fetchBookShelfList = async () => {
    try {
      const response = await FETCH_BOOK_SHELF_LIST()
      setBookShelfList(response.data)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <S.BookShelfWrapper>
      <S.BookShelfTitle>{userName}님의 서재</S.BookShelfTitle>
      {bookShelfList.length ? (
        <S.BookShelfItemsWrapper>
          {bookShelfList.map((data: BookShelfType) => (
            <BookShelfItems key={String(data.id)} data={data} />
          ))}
        </S.BookShelfItemsWrapper>
      ) : (
        <NoDataResult />
      )}
    </S.BookShelfWrapper>
  )
}

export default BookShelfList
