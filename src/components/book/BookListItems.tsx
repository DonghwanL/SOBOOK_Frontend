import * as S from '@styles/bookListStyle'

interface BookListProps {
  data: any
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
        <S.BookThumbnail>이미지</S.BookThumbnail>
        <S.BookDocuments>
          <S.BookTitle>{data.title}</S.BookTitle>
          <S.BookAuthors>{data.authors}</S.BookAuthors>
          <S.BookPublisher>
            {data.publisher} / {data.datetime}
          </S.BookPublisher>
        </S.BookDocuments>
      </S.BookListItems>
    </S.BookListItemsWrapper>
  )
}

export default BookListItems
