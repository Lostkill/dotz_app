import { LoginState } from './login'
import { CashState } from './cash/state'

export interface IApplicationState {
  login: LoginState,
  cash: CashState
}
