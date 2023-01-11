import tw from 'twin.macro'
import Link from 'next/link'
import ThemeToggler from '@/src/components/Common/ThemeToggler'

const Header = () => {
  return (
    <HeaderWrapper>
      <Link href="/">
        <HeaderTitleGroup>
          <span>📚 SOBOOK</span>
        </HeaderTitleGroup>
      </Link>
      <HeaderNav>
        <Link href="/login">
          <LoginButton>로그인</LoginButton>
        </Link>
        <ThemeToggler />
      </HeaderNav>
    </HeaderWrapper>
  )
}

export default Header

const HeaderWrapper = tw.header`
  flex justify-between items-center 
  w-full py-5 px-5 md:px-10 lg:px-10
`
const HeaderTitleGroup = tw.div`
  font-bold text-2xl
`
const HeaderNav = tw.nav`
  flex justify-center items-center
`

const LoginButton = tw.button`
  text-indigo-700 font-bold hover:underline mr-4
`
