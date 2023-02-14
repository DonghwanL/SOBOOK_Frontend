import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useCookies } from 'react-cookie'
import { USER_LOGIN } from '@lib/api/apiClient'
import { LoginFormType } from '@type/formType'
import * as S from '@components/Login/LoginForm.style'
import KakaoIcon from '@assets/images/kakao_icon.svg'
import ModalPortal from '@components/Common/Modal/ModalPortal'
import Modal from '@components/Common/Modal/Modal'

const LoginForm = () => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>()
  const [cookies, setCookie] = useCookies(['refreshToken'])
  const router = useRouter()

  const onToggleModal = () => {
    setIsOpenModal((prev) => !prev)
  }

  const {
    register,
    handleSubmit,
    setFocus,
    formState: { errors },
  } = useForm<LoginFormType>({
    mode: 'onChange',
  })

  const onSubmit = async (data: LoginFormType) => {
    try {
      const result = await USER_LOGIN(data)
      const { accessToken, refreshToken } = result.data

      // Refresh Token Set Cookies
      setCookie('refreshToken', refreshToken)
      localStorage.setItem('accessToken', JSON.stringify(accessToken))

      router.push('/')
    } catch (err) {
      onToggleModal()
    }
  }

  useEffect(() => {
    setFocus('email')
  }, [setFocus])

  return (
    <S.LoginWrapper>
      <S.LoginTitle>로그인</S.LoginTitle>
      {/* Login Form */}
      <S.Form onSubmit={handleSubmit(onSubmit)}>
        <S.LoginInput
          {...register('email', {
            required: true,
          })}
          type="text"
          placeholder="이메일"
          autoComplete="off"
          inputColor={errors.email ? '#F03A5F' : '#BAB7C3'}
        />
        <S.LoginInput
          {...register('password', {
            required: true,
          })}
          type="password"
          placeholder="비밀번호"
          autoComplete="off"
          inputColor={errors.password ? '#F03A5F' : '#BAB7C3'}
        />
        {/* Button Group */}
        <S.LoginButton type="submit">로그인</S.LoginButton>
        <S.KakaoButton type="button">
          <Image src={KakaoIcon} alt="kakaoIcon" width={24} height={21} />
          카카오로 시작하기
        </S.KakaoButton>
        <S.LoginFooter>
          <S.SignupMessage>아직 회원이 아니신가요?</S.SignupMessage>
          <Link href="/signup">
            <S.SignupPageMoveBtn>회원가입</S.SignupPageMoveBtn>
          </Link>
        </S.LoginFooter>
      </S.Form>
      {/* Modal */}
      {isOpenModal && (
        <ModalPortal>
          <Modal onToggleModal={onToggleModal}>이메일 혹은 비밀번호를 확인 해주세요.</Modal>
        </ModalPortal>
      )}
    </S.LoginWrapper>
  )
}

export default LoginForm
