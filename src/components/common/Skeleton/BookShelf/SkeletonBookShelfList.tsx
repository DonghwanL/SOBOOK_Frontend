import * as S from '@components/Common/Skeleton/BookShelf/SkeletonBookShelfList.style'

const SkeletonBookShelfList = () => {
  return (
    <>
      <S.SkeletonUserName />
      <S.SkeletonItemWrapper>
        {new Array(6).fill('').map((_, index) => (
          <S.SkeletonItem key={index}>
            <S.SkeletonImage />
            <S.SkeletonButton />
            <S.SkeletonTitle />
            <S.SkeletonSubTitle />
          </S.SkeletonItem>
        ))}
      </S.SkeletonItemWrapper>
    </>
  )
}

export default SkeletonBookShelfList
