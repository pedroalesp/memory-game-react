import { useEffect, useState } from 'react'
import Score from '../Score'
import Card from '../Card'
import { cardsMatch } from '../../utils/cardsMatch'
import PropTypes from 'prop-types'

const Board = ({ animalCards }) => {
  const [selectedCards, setSelectedCards] = useState([])
  const [matchedPairs, setMatchedPairs] = useState([])
  const [failures, setFailures] = useState(0)
  const [successes, setSuccesses] = useState(0)

  useEffect(() => {
    const checkForMatch = (cards) => {
      if (cardsMatch(cards)) {
        setMatchedPairs([...matchedPairs, ...selectedCards])
        setSuccesses((prevSuccesses) => prevSuccesses + 1)
        setSelectedCards([])
      } else {
        setFailures((prevFailures) => prevFailures + 1)
        setSelectedCards([])
      }
    }

    if (selectedCards.length === 2) {
      checkForMatch(selectedCards)
    }

    if (matchedPairs.length === animalCards.length) {
      console.log('ganasteeee Pedro')
    }
  }, [animalCards.length, matchedPairs, selectedCards])

  const renderCards = () => {
    return animalCards.map((card, index) => (
      <Card
        key={index}
        cardData={card}
        setSelectedCards={setSelectedCards}
        selectedCards={selectedCards}
        matchedPairs={matchedPairs}
      />
    ))
  }

  return (
    <>
      <h1>tablero xcdxd</h1>
      <Score successes={successes} failures={failures} />
      <div className="grid grid-cols-4 md:grid-cols-10 gap-2">
        {renderCards()}
      </div>
    </>
  )
}

export default Board

Board.propTypes = {
  animalCards: PropTypes.array,
}
