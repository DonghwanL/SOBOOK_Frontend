import dayjs from 'dayjs'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { BookShelfItemProps } from '@type/index'
import * as S from '@components/BookShelf/Detail/BookShelfDetail.style'
import Editor from '@components/Common/Editor/Editor'
import NoFoundImage from '@assets/images/no-image-found.jpeg'

const BookShelfDetail = ({ data }: BookShelfItemProps) => {
  const router = useRouter()
  const [isEdit, setIsEdit] = useState<boolean>(false)
  const [status, setStatus] = useState<string>(data.status)
  const [rating, setRating] = useState<number>(0)
  const [contents, setContents] = useState<string>('')

  const onClickBackBtn = () => {
    router.back()
  }

  const onClickStatus = () => {
    status === 'READING' ? setStatus('COMPLETE') : setStatus('READING')
  }

  useEffect(() => {
    setStatus(data.status)
  }, [data.status])

  return (
    <S.BookShelfDetailWrapper>
      <S.PageBackBtnBox>
        <S.PageBackBtn onClick={onClickBackBtn} />
      </S.PageBackBtnBox>
      <S.BookShelfDetailInfoWrapper>
        <S.BookShelfDetailImage>
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
        </S.BookShelfDetailImage>
        <S.BookShelfDetailInfo>
          <S.BookShelfDetailTitle>{data.title}</S.BookShelfDetailTitle>
          <S.BookShelfDetailAuthor>{data.author}</S.BookShelfDetailAuthor>
          <S.BookShelfDetailPublisher>
            {data.publisher} / {dayjs(data.pubdate).format('YYYY.MM.DD')}
          </S.BookShelfDetailPublisher>
          <S.BookShelfStatus onClick={onClickStatus} status={status}>
            {status}
          </S.BookShelfStatus>
        </S.BookShelfDetailInfo>
      </S.BookShelfDetailInfoWrapper>
      {isEdit ? (
        <S.BookShelfEditorWrapper>
          <Editor contents={contents} setContents={setContents} />
        </S.BookShelfEditorWrapper>
      ) : (
        <S.BookShelfContent>
          {data.memo || <S.BookShelfEmptyContents>등록된 메모가 없습니다.</S.BookShelfEmptyContents>}
        </S.BookShelfContent>
      )}
    </S.BookShelfDetailWrapper>
  )
}

export default BookShelfDetail
