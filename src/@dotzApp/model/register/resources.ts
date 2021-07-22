import auth from '@react-native-firebase/auth'
import { store } from '../../../config/store'

import * as loginAction from '../../viewModel/login'
import * as dbResources from '../db'

const create = (name: string, email: string, password: string) => {
  auth()
    .createUserWithEmailAndPassword(email.trim(), password)
    .then(currentUser => {
      console.log('created with success!', currentUser)
      currentUser.user.updateProfile({
        displayName: name
      }).then(() => {
        auth()
          .signInWithEmailAndPassword(email, password)
          .then(user => {
            console.log('Login Success!')
            dbResources.createInitialDb(user.user.uid, user.user.displayName)
            store.dispatch(loginAction.signIn(user.user.uid, user.user.displayName, user.user.email, user.user.emailVerified))
          })
          .catch(error => {
            console.error(error)
          })
      }, function (err) {
        console.log(err)
      })
    })
    .catch(error => {
      console.error(error)
    })
}

export { create }
