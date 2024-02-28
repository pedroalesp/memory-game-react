import { useEffect, useState } from 'react'
import './App.css'
import Board from './components/Board'
import { normalizeGameData } from './utils/normalizer'
import { duplicateCards } from './utils/duplicateCards'

function App() {
  const [animalCards, setAnimalCards] = useState([])

  useEffect(() => {
    const getImages = async () => {
      try {
        const response = await fetch(import.meta.env.VITE_IMAGES_URL)

        if (!response.ok) {
          throw new Error('Error de red')
        }

        const data = await response.json()

        const duplicatedCards = duplicateCards(normalizeGameData(data.entries))

        const shuffledImages = shuffleArray(duplicatedCards)

        setAnimalCards(shuffledImages)
      } catch (error) {
        console.log(error)
      }
    }

    const shuffleArray = (array) => {
      return array.sort(function () {
        return Math.random() - 0.5
      })
      // const shuffled = [...array]
      // for (let i = shuffled.length - 1; i > 0; i--) {
      //   const randomIndex = Math.floor(Math.random() * (i + 1))

      //   // Intercambia los elementos en las posiciones i y randomIndex
      //   ;[shuffled[i], shuffled[randomIndex]] = [
      //     shuffled[randomIndex],
      //     shuffled[i],
      //   ]
      // }
      // return shuffled
    }

    getImages()
  }, [])

  return <Board animalCards={animalCards} />
}

export default App
