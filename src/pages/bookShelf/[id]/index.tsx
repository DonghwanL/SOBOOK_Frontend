import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useSetRecoilState } from 'recoil'
import { bookShelfDetailState } from '@lib/store'
import { FETCH_BOOK_SHELF_DETAIL } from '@lib/api/bookShelf'
import BookShelfDetail from '@components/BookShelf/Detail/BookShelfDetail'
import withAuth from '@hocs/withAuth'

const BookShelfDetailPage = () => {
  const router = useRouter()
  const [isFetch, setIsFetch] = useState(false)
  const setDetailBookShelf = useSetRecoilState(bookShelfDetailState)

  useEffect(() => {
    if (router.isReady) {
      fetchDetailBookShelf()
    }
  }, [router.isReady])

  const fetchDetailBookShelf = async () => {
    try {
      setIsFetch(false)
      const response = await FETCH_BOOK_SHELF_DETAIL(Number(router.query.id))
      setDetailBookShelf(response.data)
      setIsFetch(true)
    } catch (err) {
      console.error('Detail Shelf Fetching Error')
    }
  }

  return <>{isFetch ? <BookShelfDetail fetchDetailBookShelf={fetchDetailBookShelf} /> : <div></div>}</>
}

export default withAuth(BookShelfDetailPage)
