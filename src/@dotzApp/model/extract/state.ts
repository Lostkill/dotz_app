interface ExtractState {
  transactions: Array<{
    id: number,
    coinType: string,
    value: number,
    type: string
  }>
}

export type { ExtractState }
