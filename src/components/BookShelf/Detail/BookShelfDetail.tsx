import dayjs from 'dayjs'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { BookShelfItemProps } from '@type/index'
import { UPDATE_BOOK_SHELF, DELETE_BOOK_SHELF } from '@lib/api/bookShelf'
import * as DOMPurify from 'dompurify'
import * as S from '@components/BookShelf/Detail/BookShelfDetail.style'
import Editor from '@components/Common/Editor/Editor'
import NoFoundImage from '@assets/images/no-image-found.jpeg'
import ModalPortal from '@components/Common/Modal/ModalPortal'
import Modal from '@components/Common/Modal/Modal'

const BookShelfDetail = ({ data }: BookShelfItemProps) => {
  const router = useRouter()
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false)
  const [isEdit, setIsEdit] = useState<boolean>(false)
  const [status, setStatus] = useState<string>(data.status)
  const [rating, setRating] = useState<number>(0)
  const [contents, setContents] = useState<string>('')
  let isServer = typeof window === 'undefined' ? false : true

  // 뒤로 가기
  const onClickBackBtn = () => {
    router.back()
  }

  // Modal Toggle
  const onToggleModal = () => {
    setIsOpenModal((prev) => !prev)
  }

  const onConfirmModal = () => {
    onClickDeleteIcon()
  }

  // State 클릭시 상태 변경
  const onClickStatus = () => {
    status === 'READING' ? setStatus('COMPLETE') : setStatus('READING')
  }

  // 수정 아이콘 클릭
  const onClickEditIcon = () => {
    setIsEdit((prev) => !prev)

    if (isEdit) {
      setContents('<b>sssssssss</b>')
    }
  }

  // 삭제 아이콘 클릭 (해당 서적 삭제)
  const onClickDeleteIcon = async () => {
    try {
      await DELETE_BOOK_SHELF(data.id)
      router.push('/bookShelf')
    } catch (err) {
      console.log('Delete Failed')
    }
  }

  // 수정하기 버튼 클릭 (해당 서적 수정)
  const onClickEdit = async () => {
    const updateData = {
      id: data.id,
      rating: rating ? rating : data.rating,
      status,
      memo: contents ? contents : data.memo,
    }

    try {
      const response = await UPDATE_BOOK_SHELF(updateData)
      router.push(`/bookShelf/${data.id}`)
    } catch (err) {
      console.log('Edit Failed')
    }
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
          <S.DetailAuthor>{data.author.replaceAll('^', ', ')}</S.DetailAuthor>
          <S.DetailPublisher>
            {data.publisher} / {dayjs(data.pubdate).format('YYYY.MM.DD')}
          </S.DetailPublisher>
          <S.DetailStatus onClick={onClickStatus} status={status}>
            {status}
          </S.DetailStatus>
        </S.BookShelfDetailInfo>
      </S.BookShelfDetailInfoWrapper>
      <S.DetailBtnGroup>
        <S.EditIcon onClick={onClickEditIcon} />
        <S.DeleteIcon onClick={onToggleModal} />
      </S.DetailBtnGroup>
      {isEdit ? (
        <S.BookShelfEditorWrapper>
          <Editor contents={contents} setContents={setContents} />
          <S.EditBtn onClick={onClickEdit}>수정하기</S.EditBtn>
        </S.BookShelfEditorWrapper>
      ) : (
        <S.BookShelfContentWrapper>
          {data.memo && isServer ? (
            <S.DetailContents dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(data.memo) }} />
          ) : (
            <S.DetailEmptyContents>등록된 메모가 없습니다.</S.DetailEmptyContents>
          )}
        </S.BookShelfContentWrapper>
      )}
      {/* Modal */}
      {isOpenModal && (
        <ModalPortal>
          <Modal
            isConfirm={true}
            onToggleModal={onToggleModal}
            onConfirmModal={onConfirmModal}
            contents="해당 서적을 삭제 하시겠습니까?"
          />
        </ModalPortal>
      )}
    </S.BookShelfDetailWrapper>
  )
}

export default BookShelfDetail
