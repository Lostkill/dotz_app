import React, { useEffect } from 'react'

import { connect } from 'react-redux'
import { IApplicationState } from '../../@dotzApp/model/types'

import { CardsView } from '../../views/cards'
import { ICardContainer } from './types'

import * as cardResources from '../../@dotzApp/model/cards/resources'

const CardsContainer: React.FC<ICardContainer> = (props) => {
  useEffect(() => {
    cardResources.getCardsCall()
  }, [])

  const handleAddVirtualCard = () => {
    cardResources.addCardCall(props.login.name)
  }

  const handleDeleteVirtualCard = () => {
    cardResources.deleteCardCall()
  }

  return (
    <CardsView
      card={props.card.card}
      virtualCard={props.card.virtualCard}
      handleAddVirtualCard={handleAddVirtualCard}
      handleDeleteVirtualCard={handleDeleteVirtualCard}
    />
  )
}

const mapStateToProps = (state: IApplicationState) => ({
  card: state.card,
  login: state.login
})

const CardsContainerExp = connect(mapStateToProps, {})(CardsContainer)
export { CardsContainerExp }
