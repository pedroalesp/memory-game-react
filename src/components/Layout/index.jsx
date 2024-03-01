import { useCallback, useEffect, useState } from 'react'

import Board from '../Board'
import Modal from '../Modal'
import Score from '../Score'

import { cardsMatch, shuffleCards } from '../../utils'

import PropTypes from 'prop-types'

const Layout = ({ animalCards, setAnimalCards }) => {
  const [selectedCards, setSelectedCards] = useState([])
  const [matchedPairs, setMatchedPairs] = useState([])
  const [failures, setFailures] = useState(0)
  const [successes, setSuccesses] = useState(0)
  const [openModal, setOpenModal] = useState(true)
  const [gameCompleted, setGameCompleted] = useState(false)

  const checkForMatch = useCallback(
    (cards) => {
      if (cardsMatch(cards)) {
        setMatchedPairs([...matchedPairs, ...selectedCards])
        setSuccesses((prevSuccesses) => prevSuccesses + 1)
        setSelectedCards([])
      } else {
        setFailures((prevFailures) => prevFailures + 1)
        setSelectedCards([])
      }
    },
    [matchedPairs, selectedCards]
  )

  useEffect(() => {
    if (selectedCards.length === 2) {
      setTimeout(() => checkForMatch(selectedCards), 1300)
    }

    if (matchedPairs.length && matchedPairs.length === animalCards.length) {
      setGameCompleted(true)
    }
  }, [animalCards.length, checkForMatch, matchedPairs, selectedCards])

  const renderModal = () =>
    openModal && (
      <Modal
        setOpenModal={setOpenModal}
        gameCompleted={gameCompleted}
        setGameCompleted={setGameCompleted}
        startGame={startGame}
        resetScore={resetScore}
      />
    )

  const startGame = (username) => {
    setOpenModal(false)
    setAnimalCards(shuffleCards(animalCards))
    window.localStorage.setItem('username', username)
  }

  const resetScore = () => {
    setGameCompleted(false)
    setMatchedPairs([])
    setFailures(0)
    setSuccesses(0)
  }

  return (
    <div className="border-2 rounded-md bg-emerald-600">
      <Score successes={successes} failures={failures} />
      <Board
        cards={animalCards}
        setSelectedCards={setSelectedCards}
        selectedCards={selectedCards}
        matchedPairs={matchedPairs}
      />
      {renderModal()}
    </div>
  )
}

export default Layout

Layout.propTypes = {
  animalCards: PropTypes.array,
  setAnimalCards: PropTypes.func,
}
