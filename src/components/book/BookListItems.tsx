import Image from 'next/image'
import { useRouter } from 'next/router'
import * as S from '@components/Book/BookListItems.style'
import NoFoundImage from '@assets/images/no-image-found.jpeg'

interface BookListProps {
  data: {
    title: string
    image: string
    author: string
    publisher: string
    pubdate: string
    isbn: string
  }
  key: string
}

const BookListItems = ({ data }: BookListProps) => {
  const router = useRouter()

  const onClickDetailBook = (id: string) => () => {
    router.push(`/books/${id}`)
  }

  return (
    <S.BookListItemsWrapper>
      <S.BookListItems>
        <S.BookCheckbox>
          <input type="checkbox" />
        </S.BookCheckbox>
        <S.BookThumbnail>
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
              alt="book_img"
              className="w-full h-auto"
            />
          )}
        </S.BookThumbnail>
        <S.BookDocuments>
          <S.BookTitle onClick={onClickDetailBook(data.isbn)}>{data.title}</S.BookTitle>
          <S.BookAuthors key={data.isbn}>{data.author.replace('^', ', ')}</S.BookAuthors>
          <S.BookPublisher>
            {data.publisher} / {data.pubdate}
          </S.BookPublisher>
          <S.AddLibraryBtn>서재에 담기</S.AddLibraryBtn>
        </S.BookDocuments>
      </S.BookListItems>
    </S.BookListItemsWrapper>
  )
}

export default BookListItems
