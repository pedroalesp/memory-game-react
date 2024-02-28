export const normalizeGameData = (entries) => {
  return entries.map((entrie) => {
    const {
      fields: {
        image: { url, title, uuid },
      },
    } = entrie

    return {
      url: url,
      title: title,
      id: uuid,
    }
  })
}
