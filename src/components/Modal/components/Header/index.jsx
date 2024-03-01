import PropTypes from 'prop-types'

const Header = ({ gameCompleted }) => {
  const username = window.localStorage.getItem('username')

  const renderTitles = () => {
    if (username) {
      return (
        <>
          <h1 className="text-2xl md:text-3xl mb-4">
            {gameCompleted
              ? `¡Felicitaciones ${username}!🎉 Has completado el juego 🏆 `
              : `Hemos guardado tu nombre, ${username}`}
          </h1>

          <h3 className="text-xl md:text-2xl">¿Quieres volver a jugar?</h3>
        </>
      )
    }
    return (
      <>
        <h1 className="text-2xl md:text-3xl mb-4">
          Bienvenido al juego de memoria de Modyo ✨
        </h1>
        <h3 className="text-xl md:text-2xl md:px-20">
          Antes de comenzar a jugar escribe tu nombre y selecciona con cuantos
          pares de cartas quieres jugar
        </h3>
      </>
    )
  }

  return <>{renderTitles()}</>
}

export default Header

Header.propTypes = {
  gameCompleted: PropTypes.bool,
}
