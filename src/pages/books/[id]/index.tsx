import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'
import { bookDetailState } from '@recoil/atoms'
import { parseString } from 'xml2js'
import { BookListsType } from '@type/bookLists.type'
import { FETCH_SEARCH_DETAIL_BOOK } from '@api/books'
import BookDetail from '@components/Book/Detail/BookDetail'
import SkeletonDetail from '@components/Common/Skeleton/Book/SkeletonDetail'

type IndexSignatureType = {
  [key: string]: string
}

const BookDetailPage = () => {
  const router = useRouter()
  const [isFetch, setIsFetch] = useState(false)
  const [detailBook, setDetailBook] = useRecoilState(bookDetailState)

  useEffect(() => {
    if (router.isReady) fetchDetailBook()
  }, [router.isReady])

  // 상세보기 Fetch
  const fetchDetailBook = async () => {
    setIsFetch(false)
    const params = { d_isbn: String(router.query.id) }

    try {
      const response = await FETCH_SEARCH_DETAIL_BOOK(params)

      // XML to JSON
      parseString(response.data, function (err, result) {
        const data = result.rss.channel[0].item[0]
        const newObj: IndexSignatureType = {}
        const newArr: any = []

        for (const key in data) {
          newObj[key] = data[key].join()
        }

        newArr.push(newObj)
        setDetailBook(newArr)
        setIsFetch(true)
      })
    } catch {
      console.error('Detail Fetching Error')
    }
  }

  return (
    <>
      {isFetch && detailBook.map((el: BookListsType) => <BookDetail key={el.isbn} data={el} />)}
      {!isFetch && <SkeletonDetail />}
    </>
  )
}

export default BookDetailPage
