import { useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import { FETCH_BOOK_SHELF_LIST } from '@lib/api/bookShelf'
import { BookShelfType } from '@type/index'
import * as S from '@components/BookShelf/List/BookShelfList.style'
import BookShelfItems from '@components/BookShelf/ListItem/BookShelfListItem'
import NoDataResult from './NoDataResult'

const BookShelfList = () => {
  const [userName, setUserName] = useState('')
  const { data, isLoading } = useQuery('bookShelfList', async () => {
    const { data } = await FETCH_BOOK_SHELF_LIST()
    return data
  })

  useEffect(() => {
    const userName = localStorage.getItem('userInfo')
    if (userName) setUserName(userName)
  }, [])

  if (isLoading) {
    return <span>Loading...</span>
  }

  return (
    <S.BookShelfWrapper>
      <S.BookShelfTitle>{userName}님의 서재</S.BookShelfTitle>
      {data ? (
        <S.BookShelfItemsWrapper>
          {data?.map((el: BookShelfType) => (
            <BookShelfItems key={String(el.id)} data={el} />
          ))}
        </S.BookShelfItemsWrapper>
      ) : (
        <NoDataResult />
      )}
    </S.BookShelfWrapper>
  )
}

export default BookShelfList
