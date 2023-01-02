import tw from 'twin.macro'
import Link from 'next/link'

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
      </HeaderNav>
    </HeaderWrapper>
  )
}

export default Header

const HeaderWrapper = tw.header`
  flex justify-between items-center 
  w-full py-5 px-10
  bg-indigo-700 text-white
`
const HeaderTitleGroup = tw.div`
  font-bold text-2xl
`
const HeaderNav = tw.nav``

const LoginButton = tw.button`
  hover:font-bold
`
