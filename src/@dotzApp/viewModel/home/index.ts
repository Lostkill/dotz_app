import { action } from 'typesafe-actions'
import { HomeTypes } from './types'

const cashBalance = (dotzBalance: number, moneyBalance: number) => action(HomeTypes.CASH_BALANCE, { dotzBalance, moneyBalance })
const cashTake = () => action(HomeTypes.CASH_TAKE)

export {
  cashBalance,
  cashTake
}
