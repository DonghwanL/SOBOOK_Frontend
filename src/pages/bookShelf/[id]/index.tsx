import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useSetRecoilState } from 'recoil'
import { bookShelfDetailState } from '@recoil/atoms'
import { FETCH_BOOK_SHELF_DETAIL } from '@api/bookShelf'
import BookShelfDetail from '@components/BookShelf/Detail/BookShelfDetail'
import SkeletonBookShelfDetail from '@components/Common/Skeleton/BookShelf/SkeletonBookShelfDetail'
import withAuth from '@hocs/withAuth'

const BookShelfDetailPage = () => {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const setDetailBookShelf = useSetRecoilState(bookShelfDetailState)

  useEffect(() => {
    if (router.isReady) {
      fetchDetailBookShelf()
    }
  }, [router.isReady])

  const fetchDetailBookShelf = async () => {
    try {
      setIsLoading(false)
      const response = await FETCH_BOOK_SHELF_DETAIL(Number(router.query.id))
      setDetailBookShelf(response.data)
      setIsLoading(true)
    } catch (err) {
      console.error('Detail Shelf Fetching Error')
    }
  }

  return (
    <>{isLoading ? <BookShelfDetail fetchDetailBookShelf={fetchDetailBookShelf} /> : <SkeletonBookShelfDetail />}</>
  )
}

export default withAuth(BookShelfDetailPage)
