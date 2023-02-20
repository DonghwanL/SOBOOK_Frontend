import Image from 'next/image'
import { BookShelfItemProps } from '@type/index'
import NoFoundImage from '@assets/images/no-image-found.jpeg'
import * as S from '@components/BookShelf/ListItem/BookShelfListItem.style'
import { useRouter } from 'next/router'

const BookShelfItems = ({ data }: BookShelfItemProps) => {
  const router = useRouter()

  const onClickShelfTitle = (id: number) => () => {
    router.push(`/bookShelf/${id}`)
  }

  return (
    <S.BookShelfItems onClick={onClickShelfTitle(data.id)}>
      <S.BookShelfImage>
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
      </S.BookShelfImage>
      <S.BookShelfStatus status={data.status}>{data.status}</S.BookShelfStatus>
      <S.BookShelfTitle>{data.title}</S.BookShelfTitle>
      <S.BookShelfAuthor>{data.author.replaceAll('^', ', ')}</S.BookShelfAuthor>
    </S.BookShelfItems>
  )
}

export default BookShelfItems
