import tw from 'twin.macro'
import styled from '@emotion/styled'
import { AiOutlineSearch, AiOutlineClose } from 'react-icons/ai'

export const SearchWrapper = tw.section`
  flex justify-center items-center mx-auto my-5 text-black p-1
  border rounded-lg
  w-4/5 lg:w-3/5 lg:max-w-3xl
  dark:bg-white
`
export const SearchInput = tw.input`
  outline-none grow ml-2 p-2
  dark:bg-white
`
export const SearchButton = tw.button`
  w-14 p-3
  flex justify-center
  hover:text-indigo-800
`

export const SearchResetButton = tw.button`
  flex justify-center p-1
  rounded-full bg-indigo-400 text-white
  hover:bg-indigo-300
`

export const SearchIcon = styled(AiOutlineSearch)`
  ${tw`text-xl font-bold`}
`

export const SearchResetIcon = styled(AiOutlineClose)`
  ${tw`text-xs font-bold`}
`
