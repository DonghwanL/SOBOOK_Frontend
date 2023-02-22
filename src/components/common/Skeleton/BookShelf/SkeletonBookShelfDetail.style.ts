import tw from 'twin.macro'
import styled from '@emotion/styled'

export const SkeletonItemWrapper = tw.section`
  flex flex-col justify-center items-center mt-5 p-5 mx-auto animate-pulse
  w-full md:w-4/5 lg:w-4/5 xl:w-3/5 2xl:w-3/5 
`

export const SkeletonDetailInfoWrapper = tw.div`
  flex flex-col sm:flex-row justify-start items-center mx-auto mt-5 p-5 w-full
`

export const SkeletonImage = styled.div`
  ${tw`rounded-lg bg-gray-300 w-2/6 h-40 mb-5 sm:w-1/6 lg:w-1/6 sm:mr-10`}
`

export const SkeletonDetailInfo = tw.div`
  w-full flex flex-col flex-1 items-center p-3
  sm:items-start
`

export const SkeletonTitle = tw.div`
  w-3/5 sm:w-2/5 h-4 bg-gray-300 rounded-lg mb-2
`

export const SkeletonSubTitle = tw.div`
  w-3/5 sm:w-1/5 h-4 bg-gray-300 rounded-lg mb-2
`

export const SkeletonSubTitleL = tw.div`
  w-3/5 sm:w-1/4 h-4 bg-gray-300 rounded-lg mb-2
`

export const SkeletonButton = tw.div`
  w-1/5 h-3 bg-gray-300 rounded-lg mb-2
`

export const SkeletonRating = tw.div`
  w-1/4 h-3 bg-gray-300 rounded-lg mb-2
`

export const SkeletonContents = tw.div`
  flex justify-center mb-10 p-5 w-full h-[300px] max-h-[300px]
  bg-gray-300 rounded-lg
`
