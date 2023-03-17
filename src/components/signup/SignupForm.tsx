import { useRouter } from 'next/router'
import { ChangeEvent, useCallback, useEffect, useRef, useState } from 'react'
import { debounce } from 'lodash'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { schema } from '@utils/signupValidationSchema'
import { SignUpFormType } from '@type/formType.type'
import { USER_EMAIL_CHECK, USER_SIGN_UP } from '@api/user'
import Modal from '@components/Common/Modal/Modal'
import ModalPortal from '@components/Common/Modal/ModalPortal'
import * as S from '@components/Signup/SignupForm.style'

const SignupForm = () => {
  const [emailCheck, setEmailCheck] = useState(false)
  const [isOpenModal, setIsOpenModal] = useState(false)
  const timerRef: { current: NodeJS.Timeout | null } = useRef(null)
  const router = useRouter()

  const {
    register,
    handleSubmit,
    setError,
    setFocus,
    formState: { errors },
  } = useForm<SignUpFormType>({
    mode: 'onChange',
    resolver: yupResolver(schema),
  })

  const onChangeEmail = async (event: ChangeEvent<HTMLInputElement>) => {
    const param = { email: event.target.value }
    checkEmail(param)
  }

  const checkEmail = useCallback(
    debounce(async (param) => {
      try {
        const result = await USER_EMAIL_CHECK(param)

        if (result.data) {
          setEmailCheck(true)
          setError('email', { message: '' })
        } else {
          setEmailCheck(false)
          setError('email', { message: '이미 존재하는 이메일 입니다.' })
        }
      } catch (error) {
        console.log('Email Check Failed')
      }
    }, 500),
    [],
  )

  const timeOut = () => {
    timerRef.current = setTimeout(() => {
      router.push('/login')
    }, 2000)
  }

  const onToggleModal = () => {
    setIsOpenModal((prev) => !prev)
    router.push('/login')
  }

  const onSubmit = async (data: SignUpFormType) => {
    if (!emailCheck) {
      setError('email', { message: '이미 존재하는 이메일 입니다.' }, { shouldFocus: true })
      return
    }

    const userData = {
      email: data.email,
      nickname: data.nickname,
      password: data.password,
    }

    try {
      const response = await USER_SIGN_UP(userData)
      if (response.status === 201) {
        setIsOpenModal(true)
        timeOut()
      }
    } catch (err) {
      console.error('Register Error')
    }
  }

  useEffect(() => {
    setFocus('email')

    return () => {
      clearTimeout(timerRef.current as NodeJS.Timeout)
    }
  }, [])

  return (
    <S.SignupWrapper>
      <S.SignupTitle>회원가입</S.SignupTitle>
      {/* Register Form */}
      <S.Form onSubmit={handleSubmit(onSubmit)}>
        <S.SignupBox>
          <S.SignupFormLabel htmlFor="email">이메일</S.SignupFormLabel>
          <S.SignupFormInput
            {...register('email')}
            type="email"
            autoComplete="off"
            placeholder="이메일을 입력 해주세요"
            inputColor={errors.password ? '#F03A5F' : '#BAB7C3'}
            onChange={onChangeEmail}
          />
          <S.ErrorMessage>{errors?.email?.message}</S.ErrorMessage>
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
            {...register('nickname')}
            type="text"
            autoComplete="off"
            placeholder="닉네임을 입력 해주세요"
            inputColor={errors.nickname ? '#F03A5F' : '#BAB7C3'}
          />
          <S.ErrorMessage>{errors?.nickname?.message}</S.ErrorMessage>
        </S.SignupBox>
        <S.SignupBox>
          <S.SignupButton type="submit">가입하기</S.SignupButton>
        </S.SignupBox>
      </S.Form>
      {/* Modal */}
      {isOpenModal && (
        <ModalPortal>
          <Modal onToggleModal={onToggleModal} contents="회원 가입이 완료 되었습니다." />
        </ModalPortal>
      )}
    </S.SignupWrapper>
  )
}

export default SignupForm
