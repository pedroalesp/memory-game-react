import { useEffect, useState } from 'react'
import './App.css'
import Board from './components/Board'

function App() {
  const [animals, setAnimals] = useState([])

  useEffect(() => {
    const getImages = async () => {
      try {
        const response = await fetch(import.meta.env.VITE_IMAGES_URL)

        if (!response.ok) {
          throw new Error('Error de red')
        }
        const data = await response.json()

        const duplicatedImages = [...data.entries, ...data.entries]

        const shuffledImages = shuffleArray(duplicatedImages)
        setAnimals(shuffledImages)
      } catch (error) {
        console.log(error)
      }
    }

    const shuffleArray = (array) => {
      const shuffled = [...array]
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
      }
      return shuffled
    }

    getImages()
  }, [])

  return (
    <>
      <Board animals={animals} />
    </>
  )
}

export default App
