import InputName from '../InputName'
import RadioGroup from './RadioGroup'
import PropTypes from 'prop-types'

const InputsContainer = ({
  pairs,
  setPairs,
  showMessage,
  setUsername,
  username,
}) => {
  return (
    <>
      <RadioGroup pairs={pairs} setPairs={setPairs} />
      <InputName
        username={username}
        setUsername={setUsername}
        showMessage={showMessage}
      />
    </>
  )
}

export default InputsContainer

InputsContainer.propTypes = {
  pairs: PropTypes.string,
  setPairs: PropTypes.func,
  showMessage: PropTypes.bool,
  setUsername: PropTypes.func,
  username: PropTypes.string,
}
