import tw from 'twin.macro'
import styled from '@emotion/styled'
import { AiOutlineFileAdd } from 'react-icons/ai'

const NoDataResult = () => {
  return (
    <NoDataResultWrapper>
      <NoResultIcon size={100} color="#EDEDED" />
      <p>등록된 서적이 없습니다. </p>
    </NoDataResultWrapper>
  )
}

export default NoDataResult

const NoDataResultWrapper = tw.div`
  flex flex-col justify-center items-center h-96 p-6
  font-semibold text-lg sm:text-2xl
`
export const NoResultIcon = styled(AiOutlineFileAdd)`
  ${tw`text-xl font-bold sm:text-2xl mb-6`}
`
