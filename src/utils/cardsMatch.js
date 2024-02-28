export const cardsMatch = (cards) => {
  const formatedCards = cards.map((card) => card.replace('-double', ''))
  return formatedCards[0] === formatedCards[1]
}
