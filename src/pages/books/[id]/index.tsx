import dayjs from 'dayjs'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { parseString } from 'xml2js'
import { BookListsType } from '@type/bookLists'
import { FETCH_SEARCH_DETAIL_BOOK } from '@lib/api/apiClient'
import * as S from '@pages/books/[id]/bookDetail.style'
import NoFoundImage from '@assets/images/no-image-found.jpeg'

type IndexSignatureType = {
  [key: string]: string
}

const BookDetail = () => {
  const router = useRouter()
  const [limit, setLimit] = useState(350)
  const [detailBook, setDetailBook] = useState([])

  // 뒤로 가기
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

  useEffect(() => {
    if (router.isReady) fetchDetailBook()
  }, [router.isReady])

  // 상세보기 Fetch
  const fetchDetailBook = async () => {
    const params = {
      d_isbn: String(router.query.id),
    }

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
      })
    } catch {
      console.error('Detail Fetching Error')
    }
  }

  return (
    <>
      {detailBook.map((el: BookListsType) => (
        <S.BookDetailWrapper key={el.isbn}>
          <S.PageBackBtnBox>
            <S.PageBackBtn onClick={onClickBackBtn} />
          </S.PageBackBtnBox>
          <S.BookDetailImage>
            {!el.image && (
              <Image
                className="w-full h-auto"
                src={NoFoundImage}
                alt="no_found_img"
                width={0}
                height={0}
                sizes="100vw"
              />
            )}
            {el.image && (
              <Image
                width={0}
                height={0}
                src={el.image}
                sizes="100vw"
                priority={true}
                alt="book_detail_img"
                className="w-full h-auto"
              />
            )}
          </S.BookDetailImage>
          <S.BookDetailTitle>{el.title}</S.BookDetailTitle>
          <S.BookDetailAuthor>{el.author.replaceAll('^', ', ')}</S.BookDetailAuthor>
          <S.BookDetailButtonGroup>
            <S.AddLibraryBtn>서재에 담기</S.AddLibraryBtn>
            <Link href={el.link} rel="noopener noreferrer" target="_blank">
              <S.NaverLinkBtn>네이버 페이지 이동</S.NaverLinkBtn>
            </Link>
          </S.BookDetailButtonGroup>
          <S.BookDetailInfoWrapper>
            <S.BookDetailInfoBox>
              <S.BookDetailInfoContent>{el.isbn}</S.BookDetailInfoContent>
              <S.BookDetailInfoSubject>ISBN</S.BookDetailInfoSubject>
            </S.BookDetailInfoBox>
            <S.BookDetailInfoBox>
              <S.BookDetailInfoContent>{el.publisher}</S.BookDetailInfoContent>
              <S.BookDetailInfoSubject>출판사</S.BookDetailInfoSubject>
            </S.BookDetailInfoBox>
            <S.BookDetailInfoBox>
              <S.BookDetailInfoContent>{dayjs(el.pubdate).format('YYYY.MM.DD')}</S.BookDetailInfoContent>
              <S.BookDetailInfoSubject>출판일</S.BookDetailInfoSubject>
            </S.BookDetailInfoBox>
          </S.BookDetailInfoWrapper>
          <S.BookDetailDescription>
            {toggleMoreBtn(el.description, limit).string}
            {toggleMoreBtn(el.description, limit).isShowMore && (
              <S.DescriptionMoreBtn onClick={onClickMore(el.description)}>
                <span>...더보기</span>
              </S.DescriptionMoreBtn>
            )}
          </S.BookDetailDescription>
        </S.BookDetailWrapper>
      ))}
    </>
  )
}

export default BookDetail
