import tw from 'twin.macro'

/* Book Detail */
export const SkeletonWrapper = tw.section`
  w-full md:w-4/5 lg:w-4/5 xl:w-3/5 2xl:w-3/5 h-auto 
  mx-auto mt-5
`

export const SkeletonItemWrapper = tw.div`
  flex flex-col animate-pulse items-center justify-center h-auto p-6 mb-5
`

export const SkeletonContainer = tw.div`
  w-4/5 sm:w-3/5 bg-gray-300 h-16 rounded-md mb-5
`

export const SkeletonImg = tw.div`
  w-48 h-64 md:w-64 md:h-96 bg-gray-300 rounded-lg mb-5
`

export const SkeletonTitle = tw.div`
  w-3/5 sm:w-2/5 bg-gray-300 h-6 rounded-md mb-2
`

export const SkeletonSubtitle = tw.div`
  w-2/5 sm:w-1/5 bg-gray-300 h-6 rounded-md mb-5
`

export const SkeletonDescription = tw.div`
  w-4/5 sm:w-3/5 bg-gray-300 h-5 rounded-md mb-2
`
export const SkeletonDescriptionSt = tw.div`
  w-3/5 sm:w-2/5 bg-gray-300 h-5 rounded-md mb-3
`

export const SkeletonFlexBox = tw.div`
  flex justify-center w-full mb-5 
`
export const SkeletonButton = tw.div`
  w-14 sm:w-20 bg-gray-300 h-6 rounded-md p-2 mr-3
`
