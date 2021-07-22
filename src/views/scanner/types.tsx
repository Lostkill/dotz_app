interface IScannerView {
  handlePayment(coin: string, paymentValue: number): void,
  dotzBalance: number,
  moneyBalance: number
}

export type {
  IScannerView
}
