import { useEffect, useState } from 'react'

import ButtonsContainer from './components/ButtonsContainer'
import Header from './components/Header'
import InputsContainer from './components/InputsContainer'

import './styles.css'
import PropTypes from 'prop-types'

const Modal = ({ gameCompleted, startGame, resetScore, pairs, setPairs }) => {
  const [username, setUsername] = useState('')
  const [showMessage, setShowMessage] = useState(false)
  const [writeName, setWriteName] = useState(true)
  const savedUsername = window.localStorage.getItem('username')

  useEffect(() => {
    if (savedUsername) {
      setUsername(savedUsername)
      setWriteName(false)
    }
  }, [savedUsername])

  const toggleModal = () => {
    if (!username.length) {
      return setShowMessage(true)
    }

    return startGame(username), setShowMessage(false), resetScore()
  }

  const renderInputsContainer = () => {
    return (
      writeName && (
        <InputsContainer
          writeName={writeName}
          showMessage={showMessage}
          pairs={pairs}
          setPairs={setPairs}
          username={username}
          setUsername={setUsername}
        />
      )
    )
  }

  return (
    <div className="modal">
      <div className="modal__content">
        <Header gameCompleted={gameCompleted} />
        {renderInputsContainer()}
        <ButtonsContainer
          toggleModal={toggleModal}
          savedUsername={savedUsername}
          setWriteName={setWriteName}
        />
      </div>
    </div>
  )
}

export default Modal

Modal.propTypes = {
  setOpenModal: PropTypes.func,
  gameCompleted: PropTypes.bool,
  startGame: PropTypes.func,
  resetScore: PropTypes.func,
  pairs: PropTypes.string,
  setPairs: PropTypes.func,
}
