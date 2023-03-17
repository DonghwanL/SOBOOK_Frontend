import { useEffect } from 'react'
import { useQuery } from 'react-query'
import { useRecoilState } from 'recoil'
import { userInfoState } from '@recoil/atoms'
import { FETCH_BOOK_SHELF_LIST } from '@api/bookShelf'
import { BookShelfType } from '@type/index'
import * as S from '@components/BookShelf/List/BookShelfList.style'
import BookShelfItems from '@components/BookShelf/ListItem/BookShelfListItem'
import SkeletonBookShelfList from '@components/Common/Skeleton/BookShelf/SkeletonBookShelfList'
import NoDataResult from './NoDataResult'

const BookShelfList = () => {
  const [nickName, setNickname] = useRecoilState(userInfoState)
  const { data, isLoading } = useQuery('bookShelfList', async () => {
    const { data } = await FETCH_BOOK_SHELF_LIST()
    return data
  })

  useEffect(() => {
    const nickName = localStorage.getItem('userInfo')
    if (nickName) setNickname(nickName)
  }, [])

  if (isLoading) return <SkeletonBookShelfList />

  return (
    <S.BookShelfWrapper>
      <S.BookShelfTitle>{nickName}님의 서재</S.BookShelfTitle>
      {data.length ? (
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
