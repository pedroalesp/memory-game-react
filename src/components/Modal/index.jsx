import { useEffect, useState } from 'react'

import ButtonsContainer from './components/ButtonsContainer'
import Header from './components/Header'
import InputName from './components/InputName'

import './styles.css'
import PropTypes from 'prop-types'

const Modal = ({ gameCompleted, startGame, resetScore }) => {
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

  const renderInputName = () => {
    return (
      writeName && (
        <InputName
          username={username}
          setUsername={setUsername}
          showMessage={showMessage}
        />
      )
    )
  }

  return (
    <div className="modal">
      <div className="modal__content">
        <Header gameCompleted={gameCompleted} />
        {renderInputName()}
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
}
