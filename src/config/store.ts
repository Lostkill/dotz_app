import { createStore, Store } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-async-storage/async-storage'

import reducers from '../@dotzApp/model/rootReducer'
import { IApplicationState } from '../@dotzApp/model/types'

const persistConfig = {
  key: 'root',
  storage: AsyncStorage
}

const persistedReducer = persistReducer(persistConfig, reducers)

const store: Store<IApplicationState> = createStore(
  persistedReducer
)

const persistor = persistStore(store)

export { store, persistor }
