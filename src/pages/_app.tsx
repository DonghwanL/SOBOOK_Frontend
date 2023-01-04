import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import { GlobalStyles } from 'twin.macro'
import Layout from '@components/layout/Layout'
import '../styles/tailwind.css'

export default function App({ Component }: AppProps) {
  return (
    <>
      <ThemeProvider enableSystem={true} attribute="class">
        <Layout>
          <GlobalStyles />
          <Component />
        </Layout>
      </ThemeProvider>
    </>
  )
}
