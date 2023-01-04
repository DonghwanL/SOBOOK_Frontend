import Header from '@components/layout/Header'

const Layout = (props: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <main>{props.children}</main>
    </>
  )
}

export default Layout
