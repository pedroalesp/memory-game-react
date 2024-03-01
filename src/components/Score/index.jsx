import { useEffect, useState } from 'react'
import { SCORE_DELAY } from '../../consts'
import PropTypes from 'prop-types'
import './styles.css'

const Score = ({ successes, failures }) => {
  const [successesUpdate, setSuccessesUpdate] = useState(false)
  const [failuresUpdate, setFailuresUpdate] = useState(false)

  const updateStateWithTimeout = (setState) => {
    setState(true)
    setTimeout(() => setState(false), SCORE_DELAY)
  }

  useEffect(() => {
    updateStateWithTimeout(setFailuresUpdate)
  }, [failures])

  useEffect(() => {
    updateStateWithTimeout(setSuccessesUpdate)
  }, [successes])

  return (
    <>
      <h3 className="text-2xl md:text-3xl mt-5">
        Marcador de {window.localStorage.getItem('username')}
      </h3>
      <div className="flex justify-center space-x-8 m-6">
        <div
          className={`container__score ${
            successesUpdate && 'container__score--success'
          } `}
        >
          <h3>Aciertos:</h3>
          <span>{successes}</span>
        </div>
        <div
          className={`container__score ${
            failuresUpdate && 'container__score--fail'
          } `}
        >
          <h3>Fallos:</h3>
          <span>{failures}</span>
        </div>
      </div>
    </>
  )
}

export default Score

Score.propTypes = {
  successes: PropTypes.number,
  failures: PropTypes.number,
}
