import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import { bookContentsState, bookRatingState, bookShelfDetailState, bookStatusState } from '@lib/store'
import { UPDATE_BOOK_STATUS, UPDATE_BOOK_RATING, UPDATE_BOOK_CONTENTS, DELETE_BOOK_SHELF } from '@lib/api/bookShelf'
import * as DOMPurify from 'dompurify'
import * as S from '@components/BookShelf/Detail/BookShelfDetail.style'
import BookShelfDetailInfo from '@components/BookShelf/Detail/BookShelfDetailInfo'
import Editor from '@components/Common/Editor/Editor'
import ModalPortal from '@components/Common/Modal/ModalPortal'
import Modal from '@components/Common/Modal/Modal'

type BookShelfDetailProps = {
  fetchDetailBookShelf: () => Promise<void>
}

const BookShelfDetail = ({ fetchDetailBookShelf }: BookShelfDetailProps) => {
  const router = useRouter()
  const [isEdit, setIsEdit] = useState<boolean>(false)
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false)
  const [status, setStatus] = useRecoilState(bookStatusState)
  const [rating, setRating] = useRecoilState(bookRatingState)
  const [contents, setContents] = useRecoilState(bookContentsState)
  const data = useRecoilValue(bookShelfDetailState)
  let isServer = typeof window === 'undefined' ? false : true

  const onToggleModal = () => setIsOpenModal((prev) => !prev)
  const onConfirmModal = () => onClickDeleteIcon()
  const onClickEditIcon = () => setIsEdit((prev) => !prev)

  const onClickDeleteIcon = async () => {
    try {
      await DELETE_BOOK_SHELF(data.id)
      router.push('/bookShelf')
    } catch (err) {
      console.log('Delete Failed')
    }
  }

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

  const onEditRating = async () => {
    const updateRating = {
      id: data.id,
      rating,
    }

    try {
      await UPDATE_BOOK_RATING(updateRating)
    } catch (error) {
      console.log('Rating Update Failed')
    }
  }

  const onEditContents = async () => {
    const updateData = {
      id: data.id,
      contents,
    }

    try {
      await UPDATE_BOOK_CONTENTS(updateData)
      fetchDetailBookShelf()
      setIsEdit(false)
    } catch (err) {
      console.log('Contents Edit Failed')
    }
  }

  useEffect(() => {
    setStatus(data.status)
    setRating(data.rating)
    setContents(data.contents)
  }, [data.status, data.rating, data.contents])

  useEffect(() => {
    onEditStatus()
  }, [status])

  return (
    <S.BookShelfDetailWrapper>
      <BookShelfDetailInfo onEditRating={onEditRating} />
      <S.DetailBtnGroup>
        <S.EditIcon onClick={onClickEditIcon} />
        <S.DeleteIcon onClick={onToggleModal} />
      </S.DetailBtnGroup>
      {isEdit ? (
        <S.BookShelfEditorWrapper>
          <Editor />
          <S.EditBtn onClick={onEditContents}>수정하기</S.EditBtn>
        </S.BookShelfEditorWrapper>
      ) : (
        <S.BookShelfContentWrapper>
          {data.contents && isServer ? (
            <S.DetailContents dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(data.contents) }} />
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
