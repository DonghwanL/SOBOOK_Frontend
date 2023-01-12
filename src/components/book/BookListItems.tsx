import Image from 'next/image'
import { v4 as uuidv4 } from 'uuid'
import * as S from '@components/Book/BookListItems.style'
import NoFoundImage from '@assets/images/no-image-found.jpeg'

interface BookListProps {
  data: {
    title: string
    thumbnail: string
    authors: string[]
    publisher: string
    datetime: string
  }
}

const BookListItems = ({ data }: BookListProps) => {
  return (
    <S.BookListItemsWrapper>
      <S.BookListItems>
        <S.BookCheckbox>
          <input type="checkbox" />
        </S.BookCheckbox>
        <S.BookThumbnail>
          {!data.thumbnail && (
            <Image className="w-full h-auto" src={NoFoundImage} alt="no_found_img" width={0} height={0} sizes="100vw" />
          )}
          {data.thumbnail && (
            <Image
              src={data.thumbnail}
              className="w-full h-auto"
              alt="book_img"
              loading="eager"
              priority={true}
              width={0}
              height={0}
              sizes="100vw"
            />
          )}
        </S.BookThumbnail>
        <S.BookDocuments>
          <S.BookTitle>{data.title}</S.BookTitle>
          <S.BookAuthors key={uuidv4()}>{data.authors.join(', ')}</S.BookAuthors>
          <S.BookPublisher>
            {data.publisher} / {new Date(data.datetime).toLocaleDateString()}
          </S.BookPublisher>
          <S.AddLibraryBtn>서재에 담기</S.AddLibraryBtn>
        </S.BookDocuments>
      </S.BookListItems>
    </S.BookListItemsWrapper>
  )
}

export default BookListItems
