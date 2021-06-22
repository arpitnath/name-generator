import React from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga'
import ErrorBoundary from './components/Error/ErrorBoundary'
import MainPage from './containers/MainPage'
import { reducers } from './reducers'
import { rootSaga } from './sagas'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
)

sagaMiddleware.run(rootSaga, store.dispatch)

function App() {
  return (
    <Provider store={store}>
      <ErrorBoundary>
        <MainPage />
      </ErrorBoundary>
    </Provider>
  )
}

export default App
