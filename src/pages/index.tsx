import SEO from '@components/common/SEO'
import BookList from '@components/book/BookLists'

export default function Home() {
  return (
    <>
      <SEO title="SOBOOK" />
      <BookList />
    </>
  )
}
