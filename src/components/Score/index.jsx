import PropTypes from 'prop-types'

const Score = ({ successes, failures }) => {
  return (
    <>
      <h3 className="text-3xl mt-5">
        Marcador de {window.localStorage.getItem('username')}
      </h3>
      <div className="flex justify-center space-x-8 m-6">
        <div className="flex flex-col border-2 w-full rounded-xl p-1 md:p-2 bg-slate-100 text-emerald-600 text-lg md:text-3xl">
          <h3>Aciertos:</h3>
          <span>{successes}</span>
        </div>
        <div className="flex flex-col border-2 w-full rounded-xl p-1 md:p-2 bg-slate-100  text-emerald-600 text-lg md:text-3xl">
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
