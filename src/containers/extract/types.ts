import { CashState } from '../../@dotzApp/model/cash/state'
import { ExtractState } from '../../@dotzApp/model/extract/state'

interface IExtractContainer {
  cash: CashState,
  extract: ExtractState,
  navigation: any
}

export type {
  IExtractContainer
}
