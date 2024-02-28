import PropTypes from 'prop-types'

const Score = ({ successes, failures }) => {
  return (
    <div className="flex justify-center	">
      <div className="flex flex-col">
        <h3>Aciertos</h3>
        <span>{successes}</span>
      </div>
      <div className="flex flex-col">
        <h3>Fallos</h3>
        <span>{failures}</span>
      </div>
    </div>
  )
}

export default Score

Score.propTypes = {
  successes: PropTypes.number,
  failures: PropTypes.number,
}
