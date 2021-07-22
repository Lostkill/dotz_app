import { action } from 'typesafe-actions'
import { LoginTypes } from './types'

const signIn = (uuid: string | null, name: string | null, email: string | null, emailVerified: boolean) => action(LoginTypes.SIGN_IN, { uuid, name, email, emailVerified })
const signOut = () => action(LoginTypes.SIGN_OUT)

export {
  signIn,
  signOut
}
