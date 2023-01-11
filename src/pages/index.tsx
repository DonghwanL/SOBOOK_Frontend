import SEO from '@/src/components/Common/SEO'
import BookList from '@components/Book/BookLists'

export default function Home() {
  return (
    <>
      <SEO title="SOBOOK" />
      <BookList />
    </>
  )
}
