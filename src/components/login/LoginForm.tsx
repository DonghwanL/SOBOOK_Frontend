import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { USER_LOGIN } from '@api/user'
import { LoginFormType } from '@type/formType.type'
import { setCookie } from '@utils/cookie'
import { useRecoilState, useSetRecoilState } from 'recoil'
import { loginState, modalState } from '@recoil/atoms'
import * as S from '@components/Login/LoginForm.style'
import KakaoIcon from '@assets/images/kakao_icon.svg'
import Modal from '@components/Common/Modal/Modal'
import ModalPortal from '@components/Common/Modal/ModalPortal'

const LoginForm = () => {
  const setIsLogined = useSetRecoilState(loginState)
  const [isOpenModal, setIsOpenModal] = useRecoilState(modalState('login'))
  const router = useRouter()

  const onToggleModal = () => setIsOpenModal((prev) => !prev)

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
      const { access_token, refresh_token, nickname } = result.data

      // Set Token
      setCookie('refreshToken', refresh_token)
      localStorage.setItem('accessToken', access_token)
      setIsLogined({ isLogined: true, nickname })
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
        {/* <S.KakaoButton type="button">
          <Image src={KakaoIcon} alt="kakaoIcon" width={24} height={21} />
          카카오로 시작하기
        </S.KakaoButton> */}
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
          <Modal onToggleModal={onToggleModal} contents="이메일 혹은 비밀번호를 확인 해주세요." />
        </ModalPortal>
      )}
    </S.LoginWrapper>
  )
}

export default LoginForm
