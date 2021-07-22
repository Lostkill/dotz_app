import { Reducer } from 'redux'
import { CardState } from './state'
import { CardTypes } from '../../viewModel/card/types'

const INITIAL_STATE: CardState = {
  card: {
    name: '',
    number: '',
    ccv: '',
    valid: ''
  },
  virtualCard: {
    name: '',
    number: '',
    ccv: '',
    valid: ''
  }
}

const cardReducer: Reducer<CardState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CardTypes.GET_CARDS:
      return { ...state, card: action.payload.cards.card, virtualCard: action.payload.cards.virtualCard }
    case CardTypes.ADD_CARD:
      return { ...state, virtualCard: action.payload.virtualCard }
    case CardTypes.DELETE_CARD:
      return { ...state, virtualCard: {} }
    default:
      return { ...state }
  }
}

export type { CardState }
export { cardReducer }
