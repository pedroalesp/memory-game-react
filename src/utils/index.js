export const duplicateCards = (cards) => {
  return [
    ...cards,
    ...cards.map((card) => ({ ...card, id: `${card.id}-double` })),
  ]
}

export const shuffleCards = (cards) => {
  return cards.sort(() => Math.random() - Math.random())
}

export const cardsMatch = (cards) => {
  const formatedCards = cards.map((card) => card.replace('-double', ''))
  return formatedCards[0] === formatedCards[1]
}
