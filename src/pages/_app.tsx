import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import { RecoilRoot } from 'recoil'
import { GlobalStyles } from 'twin.macro'
import Layout from '@/src/components/Layout/Layout'
import '../styles/tailwind.css'

export default function App({ Component }: AppProps) {
  return (
    <RecoilRoot>
      <ThemeProvider enableSystem={true} attribute="class">
        <Layout>
          <GlobalStyles />
          <Component />
        </Layout>
      </ThemeProvider>
    </RecoilRoot>
  )
}
