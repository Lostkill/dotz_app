import React from 'react'
import { RouteExp } from './config/routes'

import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from './config/store'

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouteExp />
      </PersistGate>
    </Provider>
  )
}

export default App
