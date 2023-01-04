import tw from 'twin.macro'
import styled from '@emotion/styled'
interface LoginStyleProps {
  inputColor?: string
}

export const Form = tw.form`
  w-4/5 md:w-3/5 lg:w-2/5 flex flex-col justify-center items-center
`
export const LoginWrapper = tw.section`
  container flex flex-col justify-center items-center mx-auto pt-14
`
export const LoginTitle = tw.h1`
  font-bold text-xl mb-10
`
export const LoginInput = styled.input<LoginStyleProps>`
  ${tw`w-full rounded-md p-3 mb-5`}
  border: 1px solid ${(props) => props.inputColor};

  &:focus {
    outline: none;
    border: 1px solid ${(props) => (props.inputColor === '#F03A5F' ? '#F03A5F' : '#1CC078')};
  }
`

export const LoginButton = tw.button`
  w-full rounded-md p-3 mt-1 mb-4
  font-bold text-white bg-indigo-500
`

export const KakaoButton = styled.button`
  ${tw`flex justify-center items-center w-full rounded-md p-3 mb-10 font-bold text-white`}
  background-color: #FEE500;

  img {
    ${tw`mr-3`}
  }
`

export const LoginFooter = tw.div`
  flex items-center
`
export const SignupMessage = tw.span`
  text-gray-500 font-semibold mr-2
`
export const SignupPageMoveBtn = tw.button`
  text-indigo-600 font-bold hover:underline
`
