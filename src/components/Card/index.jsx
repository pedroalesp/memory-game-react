import PropTypes from 'prop-types'
import './styles.css'

const Card = ({ cardData, setSelectedCards, selectedCards, matchedPairs }) => {
  const { url, title, id } = cardData

  const isFlipped = selectedCards.includes(id) || matchedPairs.includes(id)

  const handleOnCLick = () => {
    if (selectedCards.length === 2) {
      return null
    }

    if (!isFlipped) {
      setSelectedCards([...selectedCards, id])
    }
  }

  const revealCard = () => {
    if (isFlipped) {
      return (
        <img
          className=" size-20 object-cover rounded-md"
          src={url}
          alt={title}
        />
      )
    }

    return (
      <div className="card__cover">
        <span>?</span>
      </div>
    )
  }

  return (
    <div
      className={`card ${isFlipped ? 'card__flipped' : ''}`}
      onClick={handleOnCLick}
    >
      {revealCard()}
    </div>
  )
}

export default Card

Card.propTypes = {
  cardData: PropTypes.object,
  setSelectedCards: PropTypes.func,
  selectedCards: PropTypes.array,
  matchedPairs: PropTypes.array,
}
