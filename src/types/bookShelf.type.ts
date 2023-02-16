export interface CreateShelfType {
  title: string
  image: string
  author: string
  publisher: string
  pubdate: string
}

export interface BookShelfType {
  id: number
  title: string
  description: string
  discount: string
  link: string
  isbn: string
  image: string
  author: string
  publisher: string
  pubdate: string
  createdAt: Date
  updateAt: Date
}

export interface BookShelfItemProps {
  data: {
    title: string
    image: string
    author: string
    publisher: string
    pubdate: string
    createdAt: Date
    updateAt: Date
  }
  key: string
}
