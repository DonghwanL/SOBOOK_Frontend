import Head from 'next/head'

interface SeoProps {
  title: string
}

const SeoHead = ({ title }: SeoProps) => {
  return (
    <Head>
      <title>{title}</title>
      <link rel="icon" href="/favicon.ico" />
      <meta name="description" content="나만의 작은 서재 SOBOOK" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="SOBOOK" />
      <meta property="og:title" content="SOBOOK" />
      <meta property="og:description" content="나만의 작은 서재 SOBOOK" />
      <meta property="og:image" content="" />
      <meta property="og:url" content="" />
      <meta property="og:locale" content="ko_KR" />
      <meta name="keywords" content="책, 서적, 독서, 독서노트, 책 검색, 서재, 서평, 후기" />
      <meta property="twitter:card" content="summary" />
      <meta property="twitter:site" content="" />
      <meta property="twitter:title" content="SOBOOK" />
      <meta property="twitter:description" content="나만의 작은 서재 SOBOOK" />
      <meta property="twitter:image" content="" />
      <meta property="twitter:url" content="" />
      <meta name="viewport" content="width=1280" />
    </Head>
  )
}

export default SeoHead
