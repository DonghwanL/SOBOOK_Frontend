import styled from '@emotion/styled'
import { useEffect } from 'react'
import { AiFillStar } from 'react-icons/ai'
import { useRecoilState, useRecoilValue } from 'recoil'
import { bookRatingState, bookShelfDetailState } from '@lib/store'
import { UPDATE_BOOK_RATING } from '@lib/api/bookShelf'

const ARRAY_RATING = [1, 2, 3, 4, 5]

const Rating = () => {
  const data = useRecoilValue(bookShelfDetailState)
  const [rating, setRating] = useRecoilState(bookRatingState)
  const onClickedStar = (rating: number) => () => onEditRating(rating)

  useEffect(() => {
    setRating(data.rating)
  }, [data.rating])

  const onEditRating = async (rating: number) => {
    setRating(rating)

    const updateRating = {
      id: data.id,
      rating,
    }

    try {
      await UPDATE_BOOK_RATING(updateRating)
    } catch (error) {
      console.log('Rating Update Failed')
    }
  }

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
