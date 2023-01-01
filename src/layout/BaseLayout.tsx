import React from 'react'
import Header from '@components/common/Header'

const BaseLayout = (props: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <div>{props.children}</div>
    </>
  )
}

export default BaseLayout
