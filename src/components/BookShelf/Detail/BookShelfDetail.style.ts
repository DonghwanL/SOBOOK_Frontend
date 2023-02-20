import tw from 'twin.macro'
import styled from '@emotion/styled'
import { MdArrowBackIosNew } from 'react-icons/md'

type BookShelfDetailStyleProps = {
  status: string
}

export const BookShelfDetailWrapper = tw.section`
  flex flex-col justify-center items-center mt-5 mx-auto
  w-full md:w-4/5 lg:w-4/5 xl:w-3/5 2xl:w-3/5
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

export const BookShelfDetailInfoWrapper = tw.div`
  flex flex-col justify-start items-center mx-auto mt-5 p-5
  w-full

  sm:flex-row
`

export const BookShelfDetailImage = tw.div`
  rounded-lg shadow-md h-auto overflow-hidden
  w-2/5 mb-5 sm:w-1/5 xl:w-1/6 sm:mr-10
`

export const BookShelfDetailInfo = tw.div`
  flex flex-col items-center p-3
  sm:items-start
`

export const BookShelfDetailTitle = tw.h1`
  font-bold md:text-lg mb-2
`

export const BookShelfDetailAuthor = tw.p`
  mb-2 text-sm
`

export const BookShelfDetailPublisher = tw.p`
  mb-3 text-sm
`

export const BookShelfStatus = styled.span<BookShelfDetailStyleProps>`
  ${tw`mb-3 p-2 rounded-lg text-xs text-white font-bold cursor-pointer`}
  background-color: ${(props) => (props.status === 'READING' ? '#e17055' : '#2ecc71')};
`

export const BookShelfContent = tw.div`
  flex justify-center my-5 p-5 w-full h-[230px] max-h-[230px] overflow-auto
`

export const BookShelfEditorWrapper = styled.div`
  ${tw`my-5 p-5 w-full`}

  .ql-editor {
    height: 250px;
    max-height: 250px;
    overflow: auto;
  }
`

export const BookShelfEmptyContents = tw.div`
  flex justify-center items-center font-bold
`
