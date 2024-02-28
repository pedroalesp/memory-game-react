import PropTypes from 'prop-types'
import './styles.css'

const Card = ({ cardData, setSelectedCards, selectedCards, matchedPairs }) => {
  const { url, title, id } = cardData

  const isFlipped = selectedCards.includes(id) || matchedPairs.includes(id)

  const handleOnCLick = () => {
    if (!isFlipped) {
      setSelectedCards([...selectedCards, id])
    }
  }

  return (
    <div className={`card ${isFlipped && 'flipped'}`} onClick={handleOnCLick}>
      <img className="size-20 object-cover" src={url} alt={title} />
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
