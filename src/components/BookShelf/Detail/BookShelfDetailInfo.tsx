import dayjs from 'dayjs'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useRecoilValue } from 'recoil'
import { BookStatusPrpsType } from '@type/index'
import { bookShelfDetailState } from '@lib/store'
import * as S from '@components/BookShelf/Detail/BookShelfDetail.style'
import NoFoundImage from '@assets/images/no-image-found.jpeg'

const BookShelfDetailInfo = ({ status, onClickStatus }: BookStatusPrpsType) => {
  const router = useRouter()
  const data = useRecoilValue(bookShelfDetailState)

  const onClickBackBtn = () => {
    router.back()
  }

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
          <S.DetailStatus onClick={onClickStatus} status={status || 'READING'}>
            {status}
          </S.DetailStatus>
        </S.BookShelfDetailInfo>
      </S.BookShelfDetailInfoWrapper>
    </>
  )
}

export default BookShelfDetailInfo
