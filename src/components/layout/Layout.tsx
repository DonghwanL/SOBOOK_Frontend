import tw from 'twin.macro'
import Header from '@/src/components/Layout/Header'

const Layout = (props: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <Main>{props.children}</Main>
    </>
  )
}

export default Layout

const Main = tw.main`h-screen`
