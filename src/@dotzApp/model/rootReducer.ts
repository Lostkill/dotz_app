import { combineReducers } from 'redux'

import { loginReducer } from './login'
import { cashReducer } from './cash'
import { extractReducer } from './extract'

export default combineReducers({
  login: loginReducer,
  cash: cashReducer,
  extract: extractReducer
})
