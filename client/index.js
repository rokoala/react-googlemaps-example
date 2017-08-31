import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './components/App.jsx';
import AppStore from './reducers'
import './main.css';

const store = createStore(AppStore, {});

store.subscribe(()=>{
  console.log(store.getState())
})

render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root'));