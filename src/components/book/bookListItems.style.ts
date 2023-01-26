import tw from 'twin.macro'
// import styled from '@emotion/styled'

export const BookListItemsWrapper = tw.div`
  rounded-md mb-5
  bg-gray-100
  dark:bg-slate-800
  w-full md:w-4/5 lg:w-4/5 xl:w-3/5 2xl:w-3/5
`

export const BookListItems = tw.div`
   p-6 flex flex-col items-center justify-center
   sm:flex-row
`
export const BookCheckbox = tw.div`
  mb-3 sm:mr-6
`

export const BookThumbnail = tw.div`
  w-28 mb-5
  sm:mb-0 sm:mr-10
`

export const BookDocuments = tw.div`
  w-full text-center sm:text-left
`

export const BookTitle = tw.h1`
  text-base font-bold mb-2 cursor-pointer
  sm:text-lg 
`

export const BookAuthors = tw.span`
  block mb-1
  text-sm sm:text-base
`

export const BookPublisher = tw.p`
  mb-5
  text-sm sm:text-base sm:mb-3
`

export const AddLibraryBtn = tw.button`
  bg-indigo-400 rounded-md p-2 hover:bg-indigo-500
  font-bold text-xs text-white 
`
