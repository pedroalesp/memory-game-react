import { PAIRS } from '../../../../../consts'
import PropTypes from 'prop-types'

import './styles.css'

const RadioGroup = ({ pairs, setPairs }) => {
  const handleRadioChange = (e) => {
    setPairs(e.target.value)
  }

  return (
    <div className="radio-group">
      <label
        className={`radio__button ${
          pairs === PAIRS.five && 'radio__button--checked'
        } `}
      >
        <input
          type="radio"
          name="option"
          hidden="hidden"
          onChange={handleRadioChange}
          value={PAIRS.five}
        />
        5
      </label>
      <label
        className={`radio__button ${
          pairs === PAIRS.ten && 'radio__button--checked'
        } `}
      >
        <input
          type="radio"
          name="option"
          hidden="hidden"
          onChange={handleRadioChange}
          value={PAIRS.ten}
        />
        10
      </label>
      <label
        className={`radio__button ${
          pairs === PAIRS.fifteen && 'radio__button--checked'
        } `}
      >
        <input
          type="radio"
          hidden="hidden"
          name="option"
          onChange={handleRadioChange}
          value={PAIRS.fifteen}
        />
        15
      </label>
      <label
        className={`radio__button ${
          pairs === PAIRS.twenty && 'radio__button--checked'
        } `}
      >
        <input
          type="radio"
          name="option"
          hidden="hidden"
          onChange={handleRadioChange}
          value={PAIRS.twenty}
        />
        20
      </label>
    </div>
  )
}

export default RadioGroup

RadioGroup.propTypes = {
  pairs: PropTypes.string,
  setPairs: PropTypes.func,
}
