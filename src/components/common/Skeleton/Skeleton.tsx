import * as S from '@components/Common/Skeleton/Skeleton.style'

const SkeletonElement = () => {
  return (
    <S.SkeletonWrapper>
      <div className="flex animate-pulse flex-row items-center h-full justify-center space-x-5">
        <div className="w-12 bg-gray-300 h-12 rounded-full "></div>
        <div className="flex flex-col space-y-3">
          <div className="w-36 bg-gray-300 h-6 rounded-md "></div>
          <div className="w-24 bg-gray-300 h-6 rounded-md "></div>
        </div>
      </div>
    </S.SkeletonWrapper>
  )
}

export default SkeletonElement
