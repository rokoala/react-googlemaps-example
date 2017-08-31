import React from 'react';
import { render } from 'react-dom'
import App from './components/App.jsx';
import mainStyle from './main.css';
import mapApp from './reducers'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

const store = createStore(mapApp, {});

render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root'));