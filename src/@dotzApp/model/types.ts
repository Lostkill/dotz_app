import { LoginState } from './login'
import { CashState } from './cash/state'
import { ExtractState } from './extract'
import { CardState } from './cards'

export interface IApplicationState {
  login: LoginState,
  cash: CashState,
  extract: ExtractState,
  card: CardState
}
