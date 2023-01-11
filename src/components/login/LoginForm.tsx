import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import * as S from '@components/Login/LoginForm.style'
import KakaoIcon from '@assets/images/kakao_icon.svg'
import ModalPortal from '@components/Common/Modal/ModalPortal'
import Modal from '@components/Common/Modal/Modal'

interface LoginFormType {
  id?: string
  password?: string
}

const LoginForm = () => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>()

  const onToggleModal = () => {
    setIsOpenModal((prev) => !prev)
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
    setFocus,
  } = useForm<LoginFormType>({
    mode: 'onChange',
  })

  const onSubmit = (data: LoginFormType) => {
    console.log(data)
    const { id, password } = data

    if (id && password) {
      onToggleModal()
    }
  }

  useEffect(() => {
    setFocus('id')
  }, [setFocus])

  return (
    <S.LoginWrapper>
      <S.LoginTitle>로그인</S.LoginTitle>
      {/* Login Form */}
      <S.Form onSubmit={handleSubmit(onSubmit)}>
        <S.LoginInput
          {...register('id', {
            required: true,
          })}
          type="text"
          placeholder="아이디"
          autoComplete="off"
          inputColor={errors.id ? '#F03A5F' : '#BAB7C3'}
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
          <Modal onToggleModal={onToggleModal}>아이디 혹은 비밀번호를 확인 해주세요.</Modal>
        </ModalPortal>
      )}
    </S.LoginWrapper>
  )
}

export default LoginForm
