import tw from 'twin.macro'
import styled from '@emotion/styled'

interface SignupStyleProps {
  inputColor?: string
}

export const Form = tw.form`
  w-4/5 md:w-3/5 lg:w-2/5 flex flex-col justify-center items-center
`

export const SignupWrapper = tw.section`
  container flex flex-col justify-center items-center mx-auto pt-12 mb-5
`

export const SignupTitle = tw.h1`
  font-bold text-xl mb-10
`

export const SignupBox = tw.div`
  w-full p-2
`
export const SignupFormLabel = tw.label`
  block text-sm font-semibold mb-3 after:content-['*'] after:text-red-700 after:mx-1
`

export const SignupFormInput = styled.input<SignupStyleProps>`
  ${tw`w-full rounded-md p-3`}
  border: 1px solid ${(props) => props.inputColor};

  &:focus {
    outline: none;
    border: 1px solid ${(props) => (props.inputColor === '#F03A5F' ? '#F03A5F' : '#1CC078')};
  }
`

export const SignupButton = tw.button`
  w-full rounded-md p-3
  bg-indigo-400 font-bold text-white hover:bg-indigo-500
`

export const ErrorMessage = tw.span`
  block my-3 text-red-600 text-xs font-semibold
`
