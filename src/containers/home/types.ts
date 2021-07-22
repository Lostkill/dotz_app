import { LoginState } from '../../@dotzApp/model/login/state'
import { CashState } from '../../@dotzApp/model/cash/state'

interface IHomeContainer {
  login: LoginState,
  cash: CashState,
  navigation: any
}

export type {
  IHomeContainer
}
