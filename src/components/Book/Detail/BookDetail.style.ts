import tw from 'twin.macro'
import styled from '@emotion/styled'
import { MdArrowBackIosNew } from 'react-icons/md'

export const BookDetailWrapper = tw.section`
  flex flex-col justify-center items-center mt-5 mx-auto
  w-full md:w-4/5 lg:w-4/5 xl:w-3/5 2xl:w-3/5
`
export const BookDetailImage = tw.div`
  rounded-lg shadow-md w-2/6 h-auto overflow-hidden mb-10 
`
export const BookDetailTitle = tw.h1`
  text-base font-bold mb-2 px-5
  sm:text-lg
`
export const BookDetailAuthor = tw.span`
  text-sm mb-5
`

export const BookDetailButtonGroup = tw.div`
  flex justify-center mb-2
`
export const PageBackBtnBox = tw.div`
  w-full mb-3
`

export const PageBackBtn = styled(MdArrowBackIosNew)`
  ${tw`
     flex justify-start text-xl font-bold cursor-pointer ml-5 
     sm:text-2xl md:ml-0
     hover:font-extrabold hover:text-indigo-500
  `}
`

export const NaverLinkBtn = tw.button`
  bg-green-400 rounded-md p-2 hover:bg-green-500
  font-bold text-xs text-white mb-8
`

export const AddLibraryBtn = tw.button`
  bg-indigo-400 rounded-md p-2 hover:bg-indigo-500
  font-bold text-xs text-white mb-8 mr-3
`

export const BookDetailInfoWrapper = tw.div`
  flex justify-between items-center p-6 mb-4
  rounded-lg
  w-4/5 xl:w-3/5
  bg-gray-100 dark:bg-slate-800
`
export const BookDetailInfoBox = tw.div`
  flex flex-col items-center text-xs sm:text-sm
`

export const BookDetailInfoSubject = tw.span`
  text-gray-500 font-bold
`

export const BookDetailInfoContent = tw.span`
  mb-1
`
export const BookDetailDescription = tw.div`
  p-7 mb-10
  text-sm leading-7
`
export const DescriptionMoreBtn = styled.button`
  ${tw`text-gray-700 dark:text-gray-500`}

  span {
    ${tw`font-bold hover:text-gray-300`}
  }
`
