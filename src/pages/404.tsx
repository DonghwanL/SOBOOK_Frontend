import tw from 'twin.macro'
import Link from 'next/link'
import Lottie from 'lottie-react'
import { lottie_404 } from '@assets/lottie'

const Error404 = () => {
  return (
    <ErrorWrapper>
      <Lottie animationData={lottie_404} style={lottieStyle} />
      <ErrorTitle>페이지를 찾을 수 없습니다. 😅</ErrorTitle>
      <Link href="/">
        <MovePageBtn>메인으로 이동하기</MovePageBtn>
      </Link>
    </ErrorWrapper>
  )
}

export default Error404

const lottieStyle = {
  width: 300,
  height: 300,
}

const ErrorWrapper = tw.section`
  flex flex-col justify-center items-center h-auto md:h-screen
`
const ErrorTitle = tw.p`
  text-2xl font-bold mb-5
`
const MovePageBtn = tw.button`
  rounded-md p-3 mt-1 mb-4
  font-bold text-white text-sm bg-indigo-500
`
