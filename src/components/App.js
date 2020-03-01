import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';
import allReducers from '../reducers';
import Main from './Main/Main';
import root from '../sagas';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(allReducers, applyMiddleware(sagaMiddleware));

const App = () => {
  return (
    <Provider store={ store }>
      <Main/>
    </Provider>
  );
};

sagaMiddleware.run(root);

export default App;
