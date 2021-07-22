import database from '@react-native-firebase/database'
import { store } from '../../../config/store'

import * as homeAction from '../../viewModel/home'

const getCashBalance = (uid: string) => {
  database()
    .ref(`/users/${uid}`)
    .once('value')
    .then(snapshot => {
      store.dispatch(homeAction.cashBalance(snapshot.val().dotzBalance, snapshot.val().moneyBalance))
    })
}

const takeCash = (uid: string, coin: string, newBalanceValue: number) => {
  database()
    .ref(`/users/${uid}`)
    .update({
      [coin]: newBalanceValue
    })
    .then(() => getCashBalance(uid))

  database()
    .ref(`/extracts/${uid}`)
    .push()
    .set({
      type: coin,
      value: newBalanceValue
    })
    .then(() => getCashBalance(uid))
}

export {
  getCashBalance,
  takeCash
}
