import Link from 'next/link'
import { useState } from 'react'
import { Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid'
import ThemeToggler from '@components/Common/ThemeToggler'
import * as S from '@components/Layout/Header.style'

const Header = () => {
  const isLogined = false
  const [isToggleMenu, setIsToggleMenu] = useState(false)

  const onClickMobileToggle = () => {
    setIsToggleMenu((prev) => !prev)
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
              <S.ButtonStyle>로그아웃</S.ButtonStyle>
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
              <S.ButtonStyle mobile={true}>로그아웃</S.ButtonStyle>
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
