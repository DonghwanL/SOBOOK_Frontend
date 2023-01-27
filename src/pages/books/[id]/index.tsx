import { useRouter } from 'next/router'
import { useRecoilValue } from 'recoil'
import { bookDetailSelector } from '@lib/store'

const BookDetail = () => {
  const router = useRouter()
  const arr = useRecoilValue(bookDetailSelector(router.query.id))

  return <>{arr.map((el) => console.log(el))}</>
}

export default BookDetail
