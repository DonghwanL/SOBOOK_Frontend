import SEO from '@components/common/SEO'
import { FETCH_SEARCH_BOOKS } from '@src/lib/api/apiClient'
import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    fetchSearchBooks()
  }, [])

  const fetchSearchBooks = async () => {
    const params = {
      query: '자바스크립트',
      sort: 'recency',
      page: 1,
      size: 10,
    }

    const response = await FETCH_SEARCH_BOOKS(params)
    console.log(response)
  }

  return (
    <>
      <SEO title="SOBOOK" />
    </>
  )
}
