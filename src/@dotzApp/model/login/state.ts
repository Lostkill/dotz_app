interface LoginState {
  readonly auth: boolean,
  readonly uuid: string,
  readonly name: string,
  readonly email: string,
  readonly emailVerified: boolean
}

export type { LoginState }
