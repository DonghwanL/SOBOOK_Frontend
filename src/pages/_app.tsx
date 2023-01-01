import type { AppProps } from 'next/app'
import { GlobalStyles } from 'twin.macro'
import BaseLayout from '@layout/BaseLayout'

export default function App({ Component }: AppProps) {
  return (
    <>
      <BaseLayout>
        <GlobalStyles />
        <Component />
      </BaseLayout>
    </>
  )
}
