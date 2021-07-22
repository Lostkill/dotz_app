interface IExtractView {
  dotzPoints: number,
  money: number,
  extractHistory: Array<{
    id: number,
    coinType: string,
    type: string,
    value: number
  }>
}

interface IStyleProps {
  type: string
}

export type {
  IExtractView,
  IStyleProps
}
