import * as S from '@components/Common/Skeleton/BookShelf/SkeletonBookShelfDetail.style'

const SkeletonBookShelfDetail = () => {
  return (
    <S.SkeletonItemWrapper>
      <S.SkeletonDetailInfoWrapper>
        <S.SkeletonImage />
        <S.SkeletonDetailInfo>
          <S.SkeletonTitle />
          <S.SkeletonSubTitle />
          <S.SkeletonSubTitleL />
          <S.SkeletonButton />
          <S.SkeletonRating />
        </S.SkeletonDetailInfo>
      </S.SkeletonDetailInfoWrapper>
      <S.SkeletonContents />
    </S.SkeletonItemWrapper>
  )
}

export default SkeletonBookShelfDetail
