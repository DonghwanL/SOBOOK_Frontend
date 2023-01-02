import Link from 'next/link'
import Image from 'next/image'
import tw from 'twin.macro'
import styled from '@emotion/styled'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'

interface FormType {
  id?: string
  password?: string
  inputColor?: string
}

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setFocus,
  } = useForm<FormType>({
    mode: 'onChange',
  })

  const onSubmit = (data: FormType) => {
    console.log(data)
  }

  useEffect(() => {
    setFocus('id')
  }, [setFocus])

  return (
    <LoginWrapper>
      <LoginTitle>로그인</LoginTitle>
      {/* Login Form */}
      <Form onSubmit={handleSubmit(onSubmit)}>
        <LoginInput
          {...register('id', {
            required: '아이디를 입력 해주세요.',
          })}
          type="text"
          placeholder="아이디"
          autoComplete="off"
          inputColor={errors.id ? '#F03A5F' : '#BAB7C3'}
        />
        <ErrorMessage>{errors?.id?.message}</ErrorMessage>
        <LoginInput
          {...register('password', {
            required: '비밀번호를 입력 해주세요.',
          })}
          type="password"
          placeholder="비밀번호"
          autoComplete="off"
          inputColor={errors.password ? '#F03A5F' : '#BAB7C3'}
        />
        <ErrorMessage>{errors?.password?.message}</ErrorMessage>
        {/* Button Group */}
        <LoginButton type="submit">로그인</LoginButton>
      </Form>
    </LoginWrapper>
  )
}

export default LoginForm

const Form = tw.form`
  w-2/5 flex flex-col justify-center items-center
`
const LoginWrapper = tw.section`
  container flex flex-col justify-center items-center mx-auto pt-10
`
const LoginTitle = tw.h1`
  font-bold text-xl mb-10
`
const LoginInput = styled.input<FormType>`
  ${tw`w-full rounded-md p-3`}
  border: 1px solid ${(props) => props.inputColor};

  &:focus {
    outline: none;
    border: 1px solid ${(props) => (props.inputColor === '#F03A5F' ? '#F03A5F' : '#1CC078')};
  }
`

const LoginButton = tw.button`
  w-full rounded-md p-3 mt-1 
  font-bold text-white bg-indigo-500
`

const ErrorMessage = tw.span`
  block text-red-600 text-xs font-semibold my-3
`
