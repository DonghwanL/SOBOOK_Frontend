import type { AppProps } from 'next/app'
import GlobalStyle from '@/styles/globalStyle'
import BaseLayout from '@/layout/BaseLayout'

export default function App({ Component }: AppProps) {
  return (
    <>
      <BaseLayout>
        <GlobalStyle />
        <Component />
      </BaseLayout>
    </>
  )
}
