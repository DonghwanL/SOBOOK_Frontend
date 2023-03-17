import { useQuery } from 'react-query'
import { useRecoilValue } from 'recoil'
import { loginState } from '@recoil/atoms'
import { FETCH_BOOK_SHELF_LIST } from '@api/bookShelf'
import { BookShelfType } from '@type/index'
import * as S from '@components/BookShelf/List/BookShelfList.style'
import BookShelfItems from '@components/BookShelf/ListItem/BookShelfListItem'
import SkeletonBookShelfList from '@components/Common/Skeleton/BookShelf/SkeletonBookShelfList'
import NoDataResult from './NoDataResult'

const BookShelfList = () => {
  const loginUser = useRecoilValue(loginState)
  const { data, isLoading } = useQuery('bookShelfList', async () => {
    const { data } = await FETCH_BOOK_SHELF_LIST()
    return data
  })

  if (isLoading) return <SkeletonBookShelfList />

  return (
    <S.BookShelfWrapper>
      <S.BookShelfTitle>{loginUser.nickname}님의 서재</S.BookShelfTitle>
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
