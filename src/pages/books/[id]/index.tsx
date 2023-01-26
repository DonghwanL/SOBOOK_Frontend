import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { FETCH_SEARCH_DETAIL_BOOK } from '@lib/api/apiClient'

const BookDetail = () => {
  const router = useRouter()
  console.log(String(router.query.id))

  useEffect(() => {
    fetchSearchDetailBook()
  }, [])

  const fetchSearchDetailBook = async () => {
    const params = {
      query: router.query.id,
      target: 'isbn',
    }

    console.log(params)

    const response = await FETCH_SEARCH_DETAIL_BOOK(params)
    console.log(response.data)
  }

  return <div></div>
}

export default BookDetail
