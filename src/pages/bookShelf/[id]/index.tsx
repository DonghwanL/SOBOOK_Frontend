import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'
import { bookShelfDetailState } from '@lib/store'
import { FETCH_BOOK_SHELF_DETAIL } from '@lib/api/bookShelf'
import withAuth from '@hocs/withAuth'

const BookShelfDetailPage = () => {
  const router = useRouter()
  const [isFetch, setIsFetch] = useState(false)
  const [detailBookShelf, setDetailBookShelf] = useRecoilState(bookShelfDetailState)

  useEffect(() => {
    if (router.isReady) fetchDetailBookShelf()
  }, [router.isReady])

  const fetchDetailBookShelf = async () => {
    const response = await FETCH_BOOK_SHELF_DETAIL(Number(router.query.id))
    setDetailBookShelf(response.data)
  }

  return <div></div>
}

export default withAuth(BookShelfDetailPage)
