import tw from 'twin.macro'

const NoSearchResult = () => {
  return (
    <NoSearchResultWrapper>
      <p>π κ²μ κ²°κ³Όκ° μμ΅λλ€. </p>
    </NoSearchResultWrapper>
  )
}

export default NoSearchResult

const NoSearchResultWrapper = tw.div`
  p-6 font-semibold
`
