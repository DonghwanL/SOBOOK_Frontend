import tw from 'twin.macro'
import styled from '@emotion/styled'

export const SkeletonItemWrapper = tw.section`
  animate-pulse
  grid grid-cols-1 grid-rows-1 p-5
  sm:grid-rows-2 sm:grid-cols-3 sm:gap-10
`
export const SkeletonUserName = styled.div`
  ${tw`w-1/4 sm:w-1/6 my-10 mx-14 bg-gray-300 rounded-lg`}

  &::after {
    content: '.';
    opacity: 0;
  }
`

export const SkeletonItem = tw.div`
  flex flex-col items-center justify-center mb-10 p-3
`

export const SkeletonImage = styled.div`
  ${tw`w-2/5 sm:w-3/5 h-48 sm:h-40 bg-gray-300 rounded-lg mb-5`}

  &::after {
    content: '.';
    opacity: 0;
  }
`

export const SkeletonButton = styled.div`
  ${tw`w-2/5 h-3 bg-gray-300 rounded-lg mb-2`}

  &::after {
    content: '.';
    opacity: 0;
  }
`

export const SkeletonTitle = styled.div`
  ${tw`w-3/5 h-4 bg-gray-300 rounded-lg mb-2`}

  &::after {
    content: '.';
    opacity: 0;
  }
`

export const SkeletonSubTitle = styled.div`
  ${tw`w-2/5 h-3 bg-gray-300 rounded-lg`}

  &::after {
    content: '.';
    opacity: 0;
  }
`
