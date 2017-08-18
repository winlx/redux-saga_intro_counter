import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

import './index.css';
import registerServiceWorker from './registerServiceWorker';

import reducer from './reducer';
import rootSaga from './sagas';

import Counter from './Counter';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware)),
);

sagaMiddleware.run(rootSaga);

function action(type) {
  return store.dispatch({ type });
}

function render() {
  ReactDOM.render(
    <Counter
      value={store.getState()}
      handleIncrementAsync={() => action('INCREMENT_ASYNC')}
      handleIncrement={() => action('INCREMENT')}
      handleDecrement={() => action('DECREMENT')}
    />,
    document.getElementById('root'),
  );
}

render();
store.subscribe(render);

registerServiceWorker();
