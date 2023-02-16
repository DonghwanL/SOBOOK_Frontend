import tw from 'twin.macro'

const NoDataResult = () => {
  return (
    <NoDataResultWrapper>
      <p>등록된 서적이 없습니다. </p>
    </NoDataResultWrapper>
  )
}

export default NoDataResult

const NoDataResultWrapper = tw.div`
  flex items-center h-full p-6
  font-semibold
`
