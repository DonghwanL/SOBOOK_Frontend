import tw from 'twin.macro'
import styled from '@emotion/styled'
import { AiOutlineSearch } from 'react-icons/ai'

export const SearchWrapper = tw.section`
  container flex justify-center items-center mt-5 mx-auto text-black p-6
`
export const SearchInput = tw.input`
  outline-none h-10 border rounded-md p-5 mr-3
  w-4/5 md:w-3/5 lg:w-3/5 xl:w-2/5
  dark:bg-gray-100
`
export const SearchButton = tw.button`
  w-14 p-3 rounded-md
  flex justify-center
  opacity-80
  bg-indigo-500 hover:opacity-100
`
export const SearchIcon = styled(AiOutlineSearch)`
  ${tw`text-xl font-bold text-white`}
`
