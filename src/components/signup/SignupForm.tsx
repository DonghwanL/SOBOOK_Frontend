import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import * as S from '@styles/signupStyle'

interface SignUpFormType {
  id: string
  email: string
  nickName: string
  password: string
  confirmPassword: string
}

const SignupForm = () => {
  const {
    watch,
    register,
    handleSubmit,
    formState: { errors },
    setFocus,
  } = useForm<SignUpFormType>({
    mode: 'onChange',
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
            {...register('id', {
              required: '아이디를 입력 해주세요.',
            })}
            id="id"
            type="text"
            maxLength={15}
            autoComplete="off"
            placeholder="아이디를 입력 해주세요"
            inputColor={errors.id ? '#F03A5F' : '#BAB7C3'}
          />
          <S.ErrorMessage>{errors?.id?.message}</S.ErrorMessage>
        </S.SignupBox>
        <S.SignupBox>
          <S.SignupFormLabel htmlFor="password">비밀번호</S.SignupFormLabel>
          <S.SignupFormInput
            {...register('password', {
              required: '비밀번호를 입력 해주세요.',
              pattern: {
                value: /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/,
                message: '8자리 이상의 영문, 숫자 조합으로 입력 해주세요.',
              },
            })}
            id="password"
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
            {...register('confirmPassword', {
              required: '비밀번호를 다시 입력 해주세요.',
              pattern: {
                value: /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/,
                message: '8자리 이상의 영문, 숫자 조합으로 입력 해주세요.',
              },
              validate: (value: string) => {
                if (watch('password') !== value) {
                  return '비밀번호가 일치하지 않습니다.'
                }
              },
            })}
            id="confirmPassword"
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
            {...register('nickName', {
              required: '닉네임을 입력 해주세요.',
            })}
            id="nickName"
            type="text"
            maxLength={10}
            autoComplete="off"
            placeholder="닉네임을 입력 해주세요"
            inputColor={errors.nickName ? '#F03A5F' : '#BAB7C3'}
          />
          <S.ErrorMessage>{errors?.nickName?.message}</S.ErrorMessage>
        </S.SignupBox>
        <S.SignupBox>
          <S.SignupFormLabel htmlFor="email">이메일</S.SignupFormLabel>
          <S.SignupFormInput
            {...register('email', {
              required: '이메일을 입력 해주세요.',
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: '이메일이 형식에 맞지 않습니다.',
              },
            })}
            id="email"
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
