import tw from 'twin.macro'

const NoSearchResult = () => {
  return (
    <NoSearchResultWrapper>
      <p>🔍 검색 결과가 없습니다. </p>
    </NoSearchResultWrapper>
  )
}

export default NoSearchResult

const NoSearchResultWrapper = tw.div`
  p-6 font-semibold
`
