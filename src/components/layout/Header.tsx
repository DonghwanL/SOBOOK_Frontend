import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { USER_LOGOUT } from '@lib/api/apiClient'
import { removeCookie } from '@/src/utils/cookie'
import { Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid'
import ThemeToggler from '@components/Common/ThemeToggler'
import * as S from '@components/Layout/Header.style'

const Header = () => {
  const router = useRouter()
  const [isLogined, setIsLogined] = useState(false)
  const [isToggleMenu, setIsToggleMenu] = useState(false)

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken')
    if (accessToken) setIsLogined(true)
  })

  const onClickMobileToggle = () => {
    setIsToggleMenu((prev) => !prev)
  }

  const onClickLogOut = async () => {
    try {
      await USER_LOGOUT()
      removeCookie('refreshToken')
      localStorage.removeItem('accessToken')
      localStorage.removeItem('userInfo')
      setIsLogined(false)
      router.push('/')
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <>
      <S.HeaderWrapper>
        <Link href="/">
          <S.HeaderTitleGroup>
            <span>📚 SOBOOK</span>
          </S.HeaderTitleGroup>
        </Link>
        <S.HeaderNav>
          {!isLogined ? (
            <Link href="/login">
              <S.ButtonStyle>로그인</S.ButtonStyle>
            </Link>
          ) : (
            <>
              <Link href="/bookShelf">
                <S.ButtonStyle>내서재</S.ButtonStyle>
              </Link>
              <S.ButtonStyle onClick={onClickLogOut}>로그아웃</S.ButtonStyle>
            </>
          )}
          <ThemeToggler />
        </S.HeaderNav>
        <S.MobileMenuBtn onClick={onClickMobileToggle}>
          {isToggleMenu ? <XMarkIcon className="w-7 h-7" /> : <Bars3BottomRightIcon className="w-7 h-7" />}
        </S.MobileMenuBtn>
      </S.HeaderWrapper>
      {/* Mobile Menu */}
      {isToggleMenu && (
        <S.MobileMenuWrapper onClick={onClickMobileToggle}>
          {!isLogined ? (
            <Link href="/login">
              <S.ButtonStyle mobile={true}>로그인</S.ButtonStyle>
            </Link>
          ) : (
            <S.MenuContainer>
              <Link href="/bookShelf">
                <S.ButtonStyle mobile={true}>내서재</S.ButtonStyle>
              </Link>
              <S.ButtonStyle mobile={true} onClick={onClickLogOut}>
                로그아웃
              </S.ButtonStyle>
            </S.MenuContainer>
          )}
          <S.ThemeTogglerWrapper>
            <ThemeToggler />
          </S.ThemeTogglerWrapper>
        </S.MobileMenuWrapper>
      )}
    </>
  )
}

export default Header
