import React from 'react'
import { connect } from 'react-redux'
import { IApplicationState } from '../../@dotzApp/model/types'
import { ScannerView } from '../../views/scanner'
import { IScannerContainer } from './types'

import { ToastAndroid } from 'react-native'

import * as cashResources from '../../@dotzApp/model/cash/resources'

const ScannerContainer: React.FC<IScannerContainer> = (props) => {
  const handlePayment = (coin: string, paymentValue: number) => {
    if (coin === 'dotzBalance' && props.cash.dotzBalance > (paymentValue * 10)) {
      const newBalanceValue = props.cash.dotzBalance - (paymentValue * 10)
      cashResources.takeCash(props.login.uuid, coin, newBalanceValue)
      ToastAndroid.show(`Pagamento efetuado com sucesso! Novo Saldo: DZ ${newBalanceValue}`, ToastAndroid.SHORT)
    } else if (coin === 'moneyBalance' && props.cash.moneyBalance > paymentValue) {
      const newBalanceValue = props.cash.moneyBalance - paymentValue
      cashResources.takeCash(props.login.uuid, coin, newBalanceValue)
      ToastAndroid.show(`Pagamento efetuado com sucesso! Novo Saldo: R$ ${newBalanceValue}`, ToastAndroid.SHORT)
    } else {
      ToastAndroid.show('Não foi possivel efetuar o pagamento, por favor verificar o saldo.', ToastAndroid.SHORT)
    }
  }

  return (
    <ScannerView
      dotzBalance={props.cash.dotzBalance}
      moneyBalance={props.cash.moneyBalance}
      handlePayment={handlePayment}
    />
  )
}

const mapStateToProps = (state: IApplicationState) => ({
  login: state.login,
  cash: state.cash
})

const ScannerContainerExp = connect(mapStateToProps, {})(ScannerContainer)
export { ScannerContainerExp }
