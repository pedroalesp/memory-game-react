import Card from '../Card'
import PropTypes from 'prop-types'

const Board = ({ cards, selectedCards, setSelectedCards, matchedPairs }) => {
  const renderCards = () => {
    return cards.map((card, index) => (
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
    <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-10 gap-3 m-4">
      {renderCards()}
    </div>
  )
}

export default Board

Board.propTypes = {
  cards: PropTypes.array,
  setSelectedCards: PropTypes.func,
  selectedCards: PropTypes.array,
  matchedPairs: PropTypes.array,
}
