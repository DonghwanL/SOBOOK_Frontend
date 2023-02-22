import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import { RecoilRoot } from 'recoil'
import { GlobalStyles } from 'twin.macro'
import { CookiesProvider } from 'react-cookie'
import { QueryClient, QueryClientProvider } from 'react-query'
import Layout from '@/src/components/Layout/Layout'
import '../styles/tailwind.css'

const queryClient = new QueryClient()

export default function App({ Component }: AppProps) {
  return (
    <CookiesProvider>
      <QueryClientProvider client={queryClient}>
        <RecoilRoot>
          <ThemeProvider enableSystem={true} attribute="class">
            <Layout>
              <GlobalStyles />
              <Component />
            </Layout>
          </ThemeProvider>
        </RecoilRoot>
      </QueryClientProvider>
    </CookiesProvider>
  )
}
