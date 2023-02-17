import tw from 'twin.macro'

export const BookShelfWrapper = tw.article`
`

export const BookShelfTitle = tw.h1`
  text-xl font-bold my-5 px-6 sm:px-16
`

export const BookShelfItemsWrapper = tw.div`
  grid grid-cols-1 grid-rows-1 p-5
  sm:grid-rows-2 sm:grid-cols-3 sm:gap-5
`
