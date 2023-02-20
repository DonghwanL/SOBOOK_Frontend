import { useState } from 'react'
import { FaStar } from 'react-icons/fa'
import styled from '@emotion/styled'

const ARRAY = [0, 1, 2, 3, 4]

const Rating = () => {
  const [clicked, setClicked] = useState([false, false, false, false, false])

  const handleStarClick = (index: number) => {
    let clickStates = [...clicked]

    for (let i = 0; i < 5; i++) {
      clickStates[i] = i <= index ? true : false
    }
    setClicked(clickStates)

    let score = clicked.filter(Boolean).length
    console.log(score)
  }

  return (
    <Stars>
      {ARRAY.map((el, idx) => {
        return (
          <FaStar key={idx} size="50" onClick={() => handleStarClick(el)} className={clicked[el] && 'yellowStar'} />
        )
      })}
    </Stars>
  )
}

export default Rating

export const Stars = styled.div`
  display: flex;
  padding-top: 5px;

  & svg {
    color: gray;
    cursor: pointer;
  }

  :hover svg {
    color: #fcc419;
  }

  & svg:hover ~ svg {
    color: gray;
  }

  .yellowStar {
    color: #fcc419;
  }
`
