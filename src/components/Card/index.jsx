import PropTypes from 'prop-types'

const Card = ({ url, title }) => {
  return (
    <div className="w-50 h-50 md:w-70 md:h-70 ">
      <img className="size-20 object-cover" src={url} alt={title} />
    </div>
  )
}

export default Card

Card.propTypes = {
  url: PropTypes.string,
  title: PropTypes.string,
}
