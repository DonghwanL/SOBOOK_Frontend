import tw from 'twin.macro'
import styled from '@emotion/styled'

type BookShelfListItemStyleProps = {
  status: string
}

export const BookShelfItems = tw.div`
  flex flex-col items-center justify-center mb-10 border-b p-3
  hover:font-bold cursor-pointer sm:hover:scale-110
  sm:border-0
`
export const BookShelfImage = tw.div`
  shadow-lg overflow-hidden
  w-28 h-auto mb-5
`

export const BookShelfStatus = styled.span<BookShelfListItemStyleProps>`
  ${tw`mb-3 p-2 rounded-lg text-xs text-white font-bold`}
  background-color: ${(props) => (props.status === 'READING' ? '#e17055' : '#2ecc71')};
`

export const BookShelfTitle = tw.h3`
  mb-2 px-2
  text-sm md:px-3
`

export const BookShelfAuthor = tw.span`
  text-sm text-gray-500 font-bold mb-2
`
