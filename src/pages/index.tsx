import SEO from '@/src/components/Common/SEO'
import Visual from '@components/Visual/Visual'
import BookList from '@components/Book/BookLists'

export default function Home() {
  return (
    <>
      <SEO title="SOBOOK" />
      <Visual />
      <BookList />
    </>
  )
}
