import dayjs from 'dayjs'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { CREATE_BOOK_SHELF } from '@lib/api/bookShelf'
import { BookDetailProps, CreateShelfType } from '@type/index'
import * as S from '@components/Book/Detail/BookDetail.style'
import NoFoundImage from '@assets/images/no-image-found.jpeg'
import ModalPortal from '@components/Common/Modal/ModalPortal'
import Modal from '@components/Common/Modal/Modal'

const BookDetail = ({ data }: BookDetailProps) => {
  const router = useRouter()
  const [limit, setLimit] = useState(350)
  const [isDisabled, setIsDisabled] = useState(true)
  const [isOpenModal, setIsOpenModal] = useState(false)

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken')
    if (accessToken) setIsDisabled(false)
  })

  const onToggleModal = () => {
    setIsOpenModal((prev) => !prev)
  }

  const onClickBackBtn = () => {
    router.back()
  }

  // 더보기 클릭 시 원본 텍스트 세팅
  const onClickMore = (str: string) => () => {
    setLimit(str.length)
  }

  // 글자 수 제한 함수
  const toggleMoreBtn = (str: string, limit: number) => {
    return {
      string: str.slice(0, limit),
      isShowMore: str.length > limit,
    }
  }

  // 서재 등록
  const onClickCreateBtn = async () => {
    const createData: CreateShelfType = {
      title: data.title,
      image: data.image,
      author: data.author,
      publisher: data.publisher,
      pubdate: data.pubdate,
    }

    try {
      await CREATE_BOOK_SHELF(createData)
      setIsOpenModal(true)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <S.BookDetailWrapper key={data.isbn}>
      <S.PageBackBtnBox>
        <S.PageBackBtn onClick={onClickBackBtn} />
      </S.PageBackBtnBox>
      <S.BookDetailImage>
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
      </S.BookDetailImage>
      <S.BookDetailTitle>{data.title}</S.BookDetailTitle>
      <S.BookDetailAuthor>{data.author.replaceAll('^', ', ')}</S.BookDetailAuthor>
      <S.BookDetailButtonGroup>
        <S.AddLibraryBtn disabled={isDisabled} disableState={isDisabled} onClick={onClickCreateBtn}>
          서재에 담기
        </S.AddLibraryBtn>
        <Link href={data.link} rel="noopener noreferrer" target="_blank">
          <S.NaverLinkBtn>네이버 페이지 이동</S.NaverLinkBtn>
        </Link>
      </S.BookDetailButtonGroup>
      <S.BookDetailInfoWrapper>
        <S.BookDetailInfoBox>
          <S.BookDetailInfoContent>{data.isbn}</S.BookDetailInfoContent>
          <S.BookDetailInfoSubject>ISBN</S.BookDetailInfoSubject>
        </S.BookDetailInfoBox>
        <S.BookDetailInfoBox>
          <S.BookDetailInfoContent>{data.publisher}</S.BookDetailInfoContent>
          <S.BookDetailInfoSubject>출판사</S.BookDetailInfoSubject>
        </S.BookDetailInfoBox>
        <S.BookDetailInfoBox>
          <S.BookDetailInfoContent>{dayjs(data.pubdate).format('YYYY.MM.DD')}</S.BookDetailInfoContent>
          <S.BookDetailInfoSubject>출판일</S.BookDetailInfoSubject>
        </S.BookDetailInfoBox>
      </S.BookDetailInfoWrapper>
      <S.BookDetailDescription>
        {toggleMoreBtn(data.description, limit).string}
        {toggleMoreBtn(data.description, limit).isShowMore && (
          <S.DescriptionMoreBtn onClick={onClickMore(data.description)}>
            <span>...더보기</span>
          </S.DescriptionMoreBtn>
        )}
      </S.BookDetailDescription>
      {/* Modal */}
      {isOpenModal && (
        <ModalPortal>
          <Modal onToggleModal={onToggleModal} contents="서재에 등록 되었습니다." />
        </ModalPortal>
      )}
    </S.BookDetailWrapper>
  )
}

export default BookDetail
