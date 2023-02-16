import dayjs from 'dayjs'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { BookItemProps } from '@type/bookLists.type'
import * as S from '@components/Book/ListItem/BookListItems.style'
import NoFoundImage from '@assets/images/no-image-found.jpeg'

const BookListItems = ({ data }: BookItemProps) => {
  const router = useRouter()

  const onClickDetailBook = (id: string) => () => {
    router.push(`/books/${id}`)
  }

  return (
    <S.BookListItemsWrapper>
      <S.BookListItems>
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
          <S.BookAuthors key={data.isbn}>{data.author.replaceAll('^', ', ')}</S.BookAuthors>
          <S.BookPublisher>
            {data.publisher} / {dayjs(data.pubdate).format('YYYY.MM.DD')}
          </S.BookPublisher>
        </S.BookDocuments>
      </S.BookListItems>
    </S.BookListItemsWrapper>
  )
}

export default BookListItems
