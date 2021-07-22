import { combineReducers } from 'redux'

import { loginReducer } from './login'
import { cashReducer } from './cash'
import { extractReducer } from './extract'
import { cardReducer } from './cards'

export default combineReducers({
  login: loginReducer,
  cash: cashReducer,
  extract: extractReducer,
  card: cardReducer
})
