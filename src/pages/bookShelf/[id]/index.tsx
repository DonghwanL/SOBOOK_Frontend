import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'
import { bookShelfDetailState } from '@lib/store'
import { FETCH_BOOK_SHELF_DETAIL } from '@lib/api/bookShelf'
// import { BookShelfType } from '@type/index'
import BookShelfDetail from '@components/BookShelf/Detail/BookShelfDetail'
import withAuth from '@hocs/withAuth'

const BookShelfDetailPage = () => {
  const router = useRouter()
  const [isFetch, setIsFetch] = useState(false)
  const [detailBookShelf, setDetailBookShelf] = useRecoilState(bookShelfDetailState)

  useEffect(() => {
    if (router.isReady) {
      // setDetailBookShelf([])
      fetchDetailBookShelf()
    }
  }, [router.isReady])

  const fetchDetailBookShelf = async () => {
    const response = await FETCH_BOOK_SHELF_DETAIL(Number(router.query.id))
    setDetailBookShelf(response.data)
  }

  return <BookShelfDetail data={detailBookShelf} />
}

export default withAuth(BookShelfDetailPage)
