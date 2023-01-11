import tw from 'twin.macro'
// import styled from '@emotion/styled'

export const BookListItemsWrapper = tw.div`
  rounded-md mb-5
  bg-gray-100
  dark:bg-slate-800
  w-full md:w-4/5 lg:w-4/5 xl:w-3/5
`

export const BookListItems = tw.div`
  flex items-center p-5
`
export const BookCheckbox = tw.div`
  mr-6
`

export const BookThumbnail = tw.div`
  mr-10
`

export const BookDocuments = tw.div`
`

export const BookTitle = tw.h1`
  text-xl font-bold mb-2
`

export const BookAuthors = tw.span`
  flex block mb-1
`

export const BookPublisher = tw.p`
  mb-1
`
