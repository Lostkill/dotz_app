import auth from '@react-native-firebase/auth'
import { store } from '../../../config/store'

import * as loginAction from '../../viewModel/login'

const signIn = (email: string, password: string) => {
  auth()
    .signInWithEmailAndPassword(email, password)
    .then(user => {
      console.log('Login Success!')
      store.dispatch(loginAction.signIn(user.user.uid, user.user.displayName, user.user.email, user.user.emailVerified))
    })
    .catch(error => {
      console.error(error)
    })
}

const signOut = () => {
  auth()
    .signOut()
    .then(() => {
      store.dispatch(loginAction.signOut())
      console.log('Logout success!')
    })
}

export {
  signIn,
  signOut
}
