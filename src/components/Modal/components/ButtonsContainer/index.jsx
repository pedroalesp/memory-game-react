import './styles.css'
import PropTypes from 'prop-types'

const ButtonsContainer = ({ toggleModal, savedUsername, setWriteName }) => {
  const handleBackClick = () => setWriteName(true)

  const renderBackButton = () =>
    savedUsername && (
      <button className="common button__back" onClick={handleBackClick}>
        Configuración
      </button>
    )

  return (
    <div className="flex flex-col md:flex-row w-full items-center justify-center mt-8 space-y-3 md:space-y-0 md:space-x-6">
      <button className="common button__play" onClick={toggleModal}>
        ¡A jugar!🐸
      </button>
      {renderBackButton()}
    </div>
  )
}

export default ButtonsContainer

ButtonsContainer.propTypes = {
  toggleModal: PropTypes.func,
  setWriteName: PropTypes.func,
  savedUsername: PropTypes.string,
}
