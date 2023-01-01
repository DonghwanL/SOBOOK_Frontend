import Head from 'next/head'

interface SeoProps {
  title: string
}

const SeoHead = ({ title }: SeoProps) => {
  return (
    <Head>
      <title>{title}</title>
      <link rel="icon" href="/favicon.ico" />
      <meta name="description" content="우리동네 미용실의 정보를 편리하게 확인 하세요" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="SOBOOK" />
      <meta property="og:title" content="SOBOOK" />
      <meta property="og:description" content="우리동네 미용실의 정보를 편리하게 확인 하세요" />
      <meta property="og:image" content="" />
      <meta property="og:url" content="" />
      <meta property="og:locale" content="ko_KR" />
      <meta name="keywords" content="동네, 우리동네, 미용실, 지도, 커트" />
      <meta property="twitter:card" content="summary" />
      <meta property="twitter:site" content="" />
      <meta property="twitter:title" content="우리동네미용실" />
      <meta property="twitter:description" content="우리동네 미용실의 정보를 편리하게 확인 하세요" />
      <meta property="twitter:image" content="" />
      <meta property="twitter:url" content="" />
      <meta name="viewport" content="width=1280" />
    </Head>
  )
}

export default SeoHead
