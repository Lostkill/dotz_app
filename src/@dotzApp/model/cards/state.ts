interface CardState {
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
  }
}

export type { CardState }
