import PropTypes from 'prop-types'
import './styles.css'

const InputName = ({ username, setUsername, showMessage }) => {
  const handleChange = (e) => {
    setUsername(e.target.value)
  }

  const renderMessage = () =>
    showMessage && <span className="text-sm">Necesitamos tu nombre 😿</span>

  return (
    <>
      <input
        type="text"
        value={username}
        name="username"
        onChange={handleChange}
        className="input"
      />
      {renderMessage()}
    </>
  )
}

export default InputName

InputName.propTypes = {
  setUsername: PropTypes.func,
  showMessage: PropTypes.bool,
  username: PropTypes.string,
}
