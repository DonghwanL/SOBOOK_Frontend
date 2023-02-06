import tw from 'twin.macro'
import ReactLoading from 'react-loading'
import { memo } from 'react'

const Loader = () => {
  return (
    <LoaderWrapper>
      <ReactLoading type="spin" color="#6366F1" height={'50px'} width={'50px'} />
    </LoaderWrapper>
  )
}

export default memo(Loader)

const LoaderWrapper = tw.div`
  w-full flex justify-center items-center p-10
`
