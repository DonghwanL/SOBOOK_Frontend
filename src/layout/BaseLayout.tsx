import React from 'react'
import Header from '@components/common/Header'

const BaseLayout = (props: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <main>{props.children}</main>
    </>
  )
}

export default BaseLayout
