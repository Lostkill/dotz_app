import cardData from './data.json'
import { store } from '../../../config/store'
import { getCards, addCard, deleteCard } from '../../viewModel/card'

const getCardsCall = () => {
  return new Promise((resolve) => {
    resolve(cardData)
  })
    .then(data => store.dispatch(getCards(data)))
    .catch(err => console.log(err))
}

const addCardCall = (userName: string) => {
  const data = {
    number: '1234123412341234',
    ccv: '1234',
    name: userName,
    valid: '07/2035'
  }

  store.dispatch(addCard(data))
}

const deleteCardCall = () => {
  store.dispatch(deleteCard())
}

export {
  getCardsCall,
  addCardCall,
  deleteCardCall
}
