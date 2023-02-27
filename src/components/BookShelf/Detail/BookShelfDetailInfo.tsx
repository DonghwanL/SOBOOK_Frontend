import dayjs from 'dayjs'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import { UPDATE_BOOK_STATUS } from '@lib/api/bookShelf'
import { bookShelfDetailState, bookStatusState } from '@lib/store'
import * as S from '@components/BookShelf/Detail/BookShelfDetail.style'
import Rating from '@components/Common/Rating/Rating'
import NoFoundImage from '@assets/images/no-image-found.jpeg'

const BookShelfDetailInfo = () => {
  const router = useRouter()
  const data = useRecoilValue(bookShelfDetailState)
  const [status, setStatus] = useRecoilState(bookStatusState)

  const onClickBackBtn = () => {
    router.back()
  }

  const onClickStatus = () => setStatus((prevState) => (prevState === 'READING' ? 'COMPLETE' : 'READING'))

  const onEditStatus = async () => {
    const updateState = {
      id: data.id,
      status,
    }

    try {
      await UPDATE_BOOK_STATUS(updateState)
    } catch (err) {
      console.log('Book State Update Failed')
    }
  }

  useEffect(() => {
    setStatus(data.status)
  }, [])

  useEffect(() => {
    if (data.status !== status && status !== '') onEditStatus()
  }, [status])

  return (
    <>
      <S.PageBackBtnBox>
        <S.PageBackBtn onClick={onClickBackBtn} />
      </S.PageBackBtnBox>
      <S.BookShelfDetailInfoWrapper>
        <S.DetailImage>
          {!data.image && (
            <Image className="w-full h-auto" src={NoFoundImage} alt="no_found_img" width={0} height={0} sizes="100vw" />
          )}
          {data.image && (
            <Image
              width={0}
              height={0}
              src={data.image}
              sizes="100vw"
              priority={true}
              alt="book_detail_img"
              className="w-full h-auto"
            />
          )}
        </S.DetailImage>
        <S.BookShelfDetailInfo>
          <S.DetailTitle>{data.title}</S.DetailTitle>
          <S.DetailAuthor>{data.author ? data.author.replaceAll('^', ', ') : ''}</S.DetailAuthor>
          <S.DetailPublisher>
            {data.publisher} / {dayjs(data.pubdate).format('YYYY.MM.DD')}
          </S.DetailPublisher>
          <S.DetailStatus onClick={onClickStatus} status={status}>
            {status}
          </S.DetailStatus>
          <Rating />
        </S.BookShelfDetailInfo>
      </S.BookShelfDetailInfoWrapper>
    </>
  )
}

export default BookShelfDetailInfo
