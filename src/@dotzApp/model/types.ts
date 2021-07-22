import { LoginState } from './login'
import { CashState } from './cash/state'
import { ExtractState } from './extract'

export interface IApplicationState {
  login: LoginState,
  cash: CashState,
  extract: ExtractState
}
