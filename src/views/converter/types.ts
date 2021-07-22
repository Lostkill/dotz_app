interface IConverterView {
  handleConverter(type: string, value: number): void,
  setValueToConverte(number): void,
  valueToConverte: number,
  converterResult: number
}

export type {
  IConverterView
}
