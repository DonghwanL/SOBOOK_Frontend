import tw from 'twin.macro'
import styled from '@emotion/styled'

interface ButtonStyleProps {
  mobile?: boolean
}

export const HeaderWrapper = tw.header`
  flex justify-between items-center 
  w-full py-5 px-5 md:px-10 lg:px-10
`
export const HeaderTitleGroup = tw.div`
  flex items-center font-extrabold text-2xl pt-2 sm:pt-0
`
export const HeaderNav = tw.nav`
  hidden sm:flex justify-center items-center 
`
export const MenuContainer = tw.div`
flex flex-col`

export const MobileMenuBtn = tw.button`
  flex sm:hidden cursor-pointer
`
export const MobileMenuWrapper = tw.div`
  flex flex-col sm:hidden text-center p-5
  bg-gray-100 dark:bg-gray-300
`
export const ThemeTogglerWrapper = tw.div`
  flex justify-center
`
export const ButtonStyle = styled.button<ButtonStyleProps>`
  ${tw`text-indigo-700 font-bold`}

  margin-right: ${(props) => (props.mobile ? '0px' : '16px')};
  margin-bottom: ${(props) => (props.mobile ? '10px' : '0px')};

  &:hover {
    text-decoration: ${(props) => (props.mobile ? 'none' : 'underline')};
  }
`
