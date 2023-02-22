import styled from '@emotion/styled'
import { AiFillStar } from 'react-icons/ai'
import { useRecoilState } from 'recoil'
import { bookRatingState } from '@/src/lib/store'
import { useEffect } from 'react'

interface RatingProps {
  onEditRating?: () => void
}

const ARRAY_RATING = [1, 2, 3, 4, 5]

const Rating = ({ onEditRating }: RatingProps) => {
  const [rating, setRating] = useRecoilState(bookRatingState)
  const onClickedStar = (arrayIndex: number) => () => setRating(arrayIndex)

  useEffect(() => {
    onEditRating()
  }, [rating])

  return (
    <RatingContainer>
      {ARRAY_RATING.map((arrayindex, index) => (
        <RatingStar
          size={25}
          key={`rating_${index}`}
          className={arrayindex <= rating ? 'active' : 'inactive'}
          onClick={onClickedStar(arrayindex)}
        />
      ))}
    </RatingContainer>
  )
}

export default Rating

const RatingContainer = styled.div`
  display: flex;
  text-align: center;
  margin: 13px 0px;

  .inactive {
    color: #bdc3c7;
  }
  .active {
    color: #f39c12;
  }
`

const RatingStar = styled(AiFillStar)`
  cursor: pointer;
`
