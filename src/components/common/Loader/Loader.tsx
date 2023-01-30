import tw from 'twin.macro'
import ReactLoading from 'react-loading'

const Loader = () => {
  return (
    <LoaderWrapper>
      <ReactLoading type="spin" color="#6366F1" height={'5%'} width={'5%'} />
    </LoaderWrapper>
  )
}

export default Loader

const LoaderWrapper = tw.div`
  w-full flex justify-center items-center p-5
`
