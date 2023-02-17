import withAuth from '@hocs/withAuth'
import BookShelfList from '@components/BookShelf/List/BookShelfList'

const BookShelfPage = () => {
  return <BookShelfList />
}

export default withAuth(BookShelfPage)
