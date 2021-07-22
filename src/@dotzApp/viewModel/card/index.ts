import { action } from 'typesafe-actions'
import { CardTypes } from './types'

const getCards = (cards) => action(CardTypes.GET_CARDS, { cards })
const addCard = (virtualCard) => action(CardTypes.ADD_CARD, { virtualCard })
const deleteCard = () => action(CardTypes.DELETE_CARD)

export {
  getCards,
  addCard,
  deleteCard
}
