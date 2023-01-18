import Lottie from 'lottie-react'
import { lottie } from '@assets/lottie'
import * as S from '@components/Visual/Visual.style'

const Visual = () => {
  return (
    <S.VisualWrapper>
      <S.VisualBox>
        <S.VisualContent>
          <S.VisualTitleBox>
            <S.VisualTitle>나만의 작은 서재</S.VisualTitle>
            <S.VisualSubTitle>독서 기록 및 통계까지 한번에 확인 하세요!</S.VisualSubTitle>
          </S.VisualTitleBox>
          <Lottie animationData={lottie} style={lottieStyle} />
        </S.VisualContent>
      </S.VisualBox>
    </S.VisualWrapper>
  )
}

const lottieStyle = {
  width: 230,
  height: 230,
}

export default Visual
