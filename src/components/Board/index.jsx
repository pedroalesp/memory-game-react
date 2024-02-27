import Card from '../Card'
import PropTypes from 'prop-types'

const Board = ({ animals }) => {
  const renderCards = () => {
    return animals.map((animal, index) => (
      <Card
        key={index}
        url={animal.fields.image.url}
        title={animal.fields.image.title}
      />
    ))
  }

  return (
    <>
      <h1>tablero xcdxd</h1>
      <div className="grid grid-cols-3 md:grid-cols-10 gap-4">
        {renderCards()}
      </div>
    </>
  )
}

export default Board

Board.propTypes = {
  animals: PropTypes.array,
}
