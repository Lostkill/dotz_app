interface ICardView {
  card: {
    name: string,
    number: string,
    ccv: string,
    valid: string
  },
  virtualCard: {
    name: string,
    number: string,
    ccv: string,
    valid: string
  },
  handleAddVirtualCard(): void,
  handleDeleteVirtualCard(): void
}

export type {
  ICardView
}
