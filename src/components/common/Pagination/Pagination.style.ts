import tw from 'twin.macro'
import styled from '@emotion/styled'

type PaginationStyleProps = {
  isActive?: boolean
}

export const PaginationWrapper = tw.div`
  w-full p-3 flex justify-center mb-10
`
export const PaginationMoveButton = tw.button`
  font-extrabold text-base text-indigo-600 mr-2
`
export const PageItems = styled.button<PaginationStyleProps>`
  ${tw`w-7 h-7 mr-3 text-sm`}
  font-weight: ${(props) => (props.isActive ? 'bolder' : 'normal')};
`
