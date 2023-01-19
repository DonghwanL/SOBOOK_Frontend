import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { schema } from '@utils/signupValidationSchema'
import * as S from '@components/Signup/SignupForm.style'

interface SignUpFormType {
  id: string
  email: string
  nickName: string
  password: string
  confirmPassword: string
}

const SignupForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setFocus,
  } = useForm<SignUpFormType>({
    mode: 'onChange',
    resolver: yupResolver(schema),
  })

  const onSubmit = (data: SignUpFormType) => {
    console.log(data)
  }

  useEffect(() => {
    setFocus('id')
  }, [setFocus])

  return (
    <S.SignupWrapper>
      <S.SignupTitle>회원가입</S.SignupTitle>
      {/* Register Form */}
      <S.Form onSubmit={handleSubmit(onSubmit)}>
        <S.SignupBox>
          <S.SignupFormLabel htmlFor="id">아이디</S.SignupFormLabel>
          <S.SignupFormInput
            {...register('id')}
            type="text"
            autoComplete="off"
            placeholder="아이디를 입력 해주세요"
            inputColor={errors.id ? '#F03A5F' : '#BAB7C3'}
          />
          <S.ErrorMessage>{errors?.id?.message}</S.ErrorMessage>
        </S.SignupBox>
        <S.SignupBox>
          <S.SignupFormLabel htmlFor="password">비밀번호</S.SignupFormLabel>
          <S.SignupFormInput
            {...register('password')}
            type="password"
            autoComplete="off"
            placeholder="비밀번호를 입력 해주세요"
            inputColor={errors.password ? '#F03A5F' : '#BAB7C3'}
          />
          <S.ErrorMessage>{errors?.password?.message}</S.ErrorMessage>
        </S.SignupBox>
        <S.SignupBox>
          <S.SignupFormLabel htmlFor="confirmPassword">비밀번호 확인</S.SignupFormLabel>
          <S.SignupFormInput
            {...register('confirmPassword')}
            type="password"
            autoComplete="off"
            placeholder="비밀번호를 다시 입력 해주세요"
            inputColor={errors.confirmPassword ? '#F03A5F' : '#BAB7C3'}
          />
          <S.ErrorMessage>{errors?.confirmPassword?.message}</S.ErrorMessage>
        </S.SignupBox>
        <S.SignupBox>
          <S.SignupFormLabel htmlFor="nickName">닉네임</S.SignupFormLabel>
          <S.SignupFormInput
            {...register('nickName')}
            type="text"
            autoComplete="off"
            placeholder="닉네임을 입력 해주세요"
            inputColor={errors.nickName ? '#F03A5F' : '#BAB7C3'}
          />
          <S.ErrorMessage>{errors?.nickName?.message}</S.ErrorMessage>
        </S.SignupBox>
        <S.SignupBox>
          <S.SignupFormLabel htmlFor="email">이메일</S.SignupFormLabel>
          <S.SignupFormInput
            {...register('email')}
            type="email"
            autoComplete="off"
            placeholder="이메일을 입력 해주세요"
            inputColor={errors.password ? '#F03A5F' : '#BAB7C3'}
          />
          <S.ErrorMessage>{errors?.email?.message}</S.ErrorMessage>
        </S.SignupBox>
        <S.SignupBox>
          <S.SignupButton type="submit">가입하기</S.SignupButton>
        </S.SignupBox>
      </S.Form>
    </S.SignupWrapper>
  )
}

export default SignupForm
