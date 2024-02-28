export const duplicateCards = (cards) => {
  return [
    ...cards,
    ...cards.map((card) => ({ ...card, id: `${card.id}-double` })),
  ]
}
