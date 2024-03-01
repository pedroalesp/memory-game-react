import { useEffect, useState } from 'react'
import './App.css'
import Layout from './components/Layout'
import { normalizeGameData } from './utils/normalizer'
import { duplicateCards } from './utils'

function App() {
  const [animalCards, setAnimalCards] = useState([])

  useEffect(() => {
    const getImages = async () => {
      try {
        const response = await fetch(import.meta.env.VITE_IMAGES_URL)

        if (!response.ok) {
          throw new Error('Ha ocurrido un problema de conexión 🚧')
        }

        const data = await response.json()

        const duplicatedCards = duplicateCards(normalizeGameData(data.entries))

        setAnimalCards(duplicatedCards)
      } catch (error) {
        console.error(error)
      }
    }

    getImages()
  }, [])

  return <Layout animalCards={animalCards} setAnimalCards={setAnimalCards} />
}

export default App
