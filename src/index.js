import React from 'react';
import { render } from 'react-dom';
import Routers from './routers';
import { createStore } from "redux";
import { Provider } from 'react-redux'
import rootReducer from './reducers/rootReducer'

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const rootElement = document.getElementById('root');

render(
  <Provider store={store}>
    <Routers />
  </Provider>,
  rootElement
);
