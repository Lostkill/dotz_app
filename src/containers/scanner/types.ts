import { CashState } from '../../@dotzApp/model/cash/state'
import { LoginState } from '../../@dotzApp/model/login/state'

interface IScannerContainer {
  login: LoginState,
  cash: CashState,
  navigation: any
}

export type {
  IScannerContainer
}
