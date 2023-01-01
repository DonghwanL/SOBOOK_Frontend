import SEO from '@components/common/SeoHead'
import tw from 'twin.macro'

const Input = tw.input`
  text-center border h-28 
`

export default function Home() {
  return (
    <>
      <SEO title="SOBOOK" />
      <Input type="text" />
    </>
  )
}
