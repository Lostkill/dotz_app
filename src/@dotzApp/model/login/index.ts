import { Reducer } from 'redux'
import { LoginState } from './state'
import { LoginTypes } from '../../viewModel/login/types'

const INITIAL_STATE: LoginState = {
  auth: false,
  uuid: '',
  name: '',
  email: '',
  emailVerified: false
}

const loginReducer: Reducer<LoginState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LoginTypes.SIGN_IN:
      return { ...state, auth: true, uuid: action.payload.uuid, name: action.payload.name, email: action.payload.email, emailVerified: action.payload.emailVerified }
    case LoginTypes.SIGN_OUT:
      return INITIAL_STATE
    default:
      return { ...state }
  }
}

export type { LoginState }
export { loginReducer }
