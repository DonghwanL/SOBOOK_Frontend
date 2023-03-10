export interface CreateShelfType {
  title: string
  image: string
  author: string
  publisher: string
  pubdate: string
}

export interface UpdateShelfType {
  id: number
  rating?: number
  status?: string
  contents?: string
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
  status: string
  rating: number
  contents: string
  updateAt: Date
}

export interface BookShelfItemProps {
  data: {
    id: number
    title: string
    image: string
    author: string
    publisher: string
    pubdate: string
    status: string
    rating: number
    contents: string
    createdAt: Date
    updateAt: Date
  }
}
