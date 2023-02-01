import tw from 'twin.macro'
import ReactLoading from 'react-loading'
import { memo } from 'react'

const Loader = () => {
  return (
    <LoaderWrapper>
      <ReactLoading type="spin" color="#6366F1" height={'5%'} width={'5%'} />
    </LoaderWrapper>
  )
}

export default memo(Loader)

const LoaderWrapper = tw.div`
  w-full flex justify-center items-center p-5
`
