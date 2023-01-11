import tw from 'twin.macro'
// import styled from '@emotion/styled'

export const BookListsWrapper = tw.article`
  w-full flex flex-col justify-center items-center mt-5
`

export const BookListItemsWrapper = tw.div`
  w-full 
`
export const BookListItems = tw.div`
  flex items-center p-8
  border-t border-gray-300
`
export const BookIndex = tw.span`
  font-bold mr-3 w-8
`

export const BookCheckbox = tw.div`
  mr-10
`

export const BookThumbnail = tw.div`
  mr-10
`

export const BookDocuments = tw.div``

export const BookTitle = tw.h1`
  text-xl font-bold mb-2
`

export const BookAuthors = tw.span`
  block mb-1
`

export const BookPublisher = tw.p`
  mb-1
`
