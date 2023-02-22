import * as S from '@components/Common/Skeleton/Book/SkeletonDetail.style'

const SkeletonDetail = () => {
  return (
    <S.SkeletonWrapper>
      <S.SkeletonItemWrapper>
        <S.SkeletonImg />
        <S.SkeletonTitle />
        <S.SkeletonSubtitle />
        <S.SkeletonFlexBox>
          <S.SkeletonButton />
          <S.SkeletonButton />
        </S.SkeletonFlexBox>
        <S.SkeletonContainer />
        <S.SkeletonDescription />
        <S.SkeletonDescription />
        <S.SkeletonDescription />
        <S.SkeletonDescriptionSt />
      </S.SkeletonItemWrapper>
    </S.SkeletonWrapper>
  )
}

export default SkeletonDetail
