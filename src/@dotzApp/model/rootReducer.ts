import { combineReducers } from 'redux'

import { loginReducer } from './login'
import { cashReducer } from './cash'

export default combineReducers({
  login: loginReducer,
  cash: cashReducer
})
