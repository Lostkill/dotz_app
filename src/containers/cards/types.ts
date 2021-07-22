import { CardState } from '../../@dotzApp/model/cards/state'
import { LoginState } from '../../@dotzApp/model/login/state'

interface ICardContainer {
  card: CardState,
  login: LoginState
}

export type {
  ICardContainer
}
