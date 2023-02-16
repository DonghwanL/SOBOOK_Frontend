export interface BookListsType {
  title: string
  description: string
  discount: string
  link: string
  isbn: string
  image: string
  author: string
  publisher: string
  pubdate: string
}

export interface BookItemProps {
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

export interface BookDetailProps {
  data: {
    title: string
    description: string
    image: string
    author: string
    publisher: string
    pubdate: string
    isbn: string
    link: string
  }
  key: string
}
