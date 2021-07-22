import { Reducer } from 'redux'
import { CashState } from './state'
import { HomeTypes } from '../../viewModel/home/types'

const INITIAL_STATE: CashState = {
  dotzBalance: 0,
  moneyBalance: 0
}

const cashReducer: Reducer<CashState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case HomeTypes.CASH_BALANCE:
      return { ...state, dotzBalance: action.payload.dotzBalance, moneyBalance: action.payload.moneyBalance }
    case HomeTypes.CASH_TAKE:
      return { ...state, dotzBalance: action.payload.dotzBalance, moneyBalance: action.payload.moneyBalance }
    default:
      return { ...state }
  }
}

export type { CashState }
export { cashReducer }
