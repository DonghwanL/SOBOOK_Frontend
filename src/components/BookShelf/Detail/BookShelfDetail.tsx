import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useRecoilValue } from 'recoil'
import { bookShelfDetailState } from '@lib/store'
import { UPDATE_BOOK_STATUS, UPDATE_BOOK_CONTENTS, DELETE_BOOK_SHELF } from '@lib/api/bookShelf'
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
  const data = useRecoilValue(bookShelfDetailState)
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false)
  const [isEdit, setIsEdit] = useState<boolean>(false)
  const [status, setStatus] = useState<string>(data.status)
  const [rating, setRating] = useState<number>(0)
  const [contents, setContents] = useState<string>(data.memo)
  let isServer = typeof window === 'undefined' ? false : true

  const onToggleModal = () => {
    setIsOpenModal((prev) => !prev)
  }

  const onConfirmModal = () => {
    onClickDeleteIcon()
  }

  const onClickStatus = async () => {
    console.log(data.status)
    setStatus((status) => (status = 'COMPLETE'))
    onStateUpdate()
  }

  const onStateUpdate = async () => {
    const updateState = {
      id: data.id,
      status,
    }

    console.log(updateState)

    try {
      await UPDATE_BOOK_STATUS(updateState)
    } catch (err) {
      console.log('Book State Update Failed')
    }
  }

  const onClickEditIcon = () => {
    setIsEdit((prev) => !prev)
  }

  const onClickDeleteIcon = async () => {
    try {
      await DELETE_BOOK_SHELF(data.id)
      router.push('/bookShelf')
    } catch (err) {
      console.log('Delete Failed')
    }
  }

  const onClickEdit = async () => {
    const updateData = {
      id: data.id,
      memo: contents,
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
    setContents(data.memo)
  }, [data.status, data.memo])

  return (
    <S.BookShelfDetailWrapper>
      <BookShelfDetailInfo status={status} onClickStatus={onClickStatus} />
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
