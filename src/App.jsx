import { useEffect, useState } from 'react'
import './App.css'
import Layout from './components/Layout'
import { normalizeGameData } from './utils/normalizer'
import { duplicateCards } from './utils'
import { getImagesService } from './lib/service'
import { PAIRS } from './consts'

function App() {
  const [animalCards, setAnimalCards] = useState([])
  const [pairs, setPairs] = useState(PAIRS.five)

  useEffect(() => {
    const getImages = async () => {
      try {
        const response = await getImagesService(pairs)

        const duplicatedCards = duplicateCards(normalizeGameData(response))

        setAnimalCards(duplicatedCards)
      } catch (error) {
        console.error(error)
      }
    }

    getImages()
  }, [pairs])

  return (
    <Layout
      animalCards={animalCards}
      setAnimalCards={setAnimalCards}
      pairs={pairs}
      setPairs={setPairs}
    />
  )
}

export default App
