import Image from 'next/image'
import * as S from '@styles/bookListStyle'
import NoFoundImage from '@assets/images/no-image-found.jpeg'

interface BookListProps {
  data: {
    title: string
    thumbnail: string
    authors: string
    publisher: string
    datetime: string
  }
  index: number
}

const BookListItems = ({ data, index }: BookListProps) => {
  return (
    <S.BookListItemsWrapper>
      <S.BookListItems>
        <S.BookIndex>{index + 1}</S.BookIndex>
        <S.BookCheckbox>
          <input type="checkbox" />
        </S.BookCheckbox>
        <S.BookThumbnail>
          {!data.thumbnail && (
            <Image className="w-full h-auto" src={NoFoundImage} alt="no_found_img" width={0} height={0} sizes="100vw" />
          )}
          {data.thumbnail && (
            <Image className="w-full h-auto" src={data.thumbnail} alt="book_img" width={0} height={0} sizes="100vw" />
          )}
        </S.BookThumbnail>
        <S.BookDocuments>
          <S.BookTitle>{data.title}</S.BookTitle>
          <S.BookAuthors>{data.authors}</S.BookAuthors>
          <S.BookPublisher>
            {data.publisher} / {new Date(data.datetime).toLocaleDateString()}
          </S.BookPublisher>
        </S.BookDocuments>
      </S.BookListItems>
    </S.BookListItemsWrapper>
  )
}

export default BookListItems
