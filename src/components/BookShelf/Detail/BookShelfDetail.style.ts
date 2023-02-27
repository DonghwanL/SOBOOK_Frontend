import tw from 'twin.macro'
import styled from '@emotion/styled'
import { BiEdit } from 'react-icons/bi'
import { RiDeleteBinLine } from 'react-icons/ri'
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

export const DetailImage = tw.div`
  rounded-lg shadow-md h-auto overflow-hidden
  w-2/6 mb-5 sm:w-1/6 sm:mr-10
`

export const BookShelfDetailInfo = tw.div`
  flex flex-col flex-1 items-center p-3
  sm:items-start
`

export const DetailTitle = tw.h1`
  font-bold md:text-lg mb-2
`

export const DetailAuthor = tw.p`
  mb-2 text-sm
`

export const DetailPublisher = tw.p`
  mb-3 text-sm
`

export const DetailStatus = styled.span<BookShelfDetailStyleProps>`
  ${tw`mb-2 p-2 rounded-lg text-xs text-white font-bold cursor-pointer`}
  background-color: ${(props) => (props.status === 'READING' ? '#e17055' : '#2ecc71')};
`

export const DetailBtnGroup = tw.div`
  w-full flex justify-end px-8
`

export const EditIcon = styled(BiEdit)`
  ${tw`
     text-xl text-gray-400 font-bold cursor-pointer mr-5
     sm:text-2xl md:ml-0
     hover:font-extrabold hover:text-indigo-500
  `}
`

export const DeleteIcon = styled(RiDeleteBinLine)`
  ${tw`
     text-xl text-gray-400 font-bold cursor-pointer
     sm:text-2xl md:ml-0
     hover:font-extrabold hover:text-indigo-500
  `}
`

export const BookShelfContentWrapper = tw.div`
  flex justify-center mb-10 p-5 w-full h-[300px] max-h-[300px] overflow-auto
`

export const DetailContents = tw.div`
  w-full p-5 text-sm
  border rounded-md
`

export const BookShelfEditorWrapper = styled.div`
  ${tw`mb-5 p-5 w-full flex flex-col justify-center`}

  .ql-editor {
    height: 250px;
    max-height: 250px;
    overflow: auto;
  }
`

export const EditBtn = tw.button`
  bg-indigo-800 text-white mt-5 p-3
  opacity-80 hover:opacity-100 hover:font-semibold
`

export const DetailEmptyContents = tw.div`
  w-full flex justify-center items-center p-5  
  border rounded-md font-semibold
`
