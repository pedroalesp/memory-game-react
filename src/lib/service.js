export const getImagesService = async (pairs) => {
  const response = await fetch(`${import.meta.env.VITE_IMAGES_URL}${pairs}`)

  if (!response.ok) {
    throw new Error('Ha ocurrido un problema de conexión 🚧')
  }

  const data = await response.json()
  return data.entries
}
