import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import { ModalProvider } from './context/Modal';
import configureStore from './store';

const loadState = () => {
  try {
    const cart = localStorage.getItem('cart')
    if (cart === null) {
      return undefined
    }
    return JSON.parse(cart)
  }
  catch (err) {
    return undefined
  }
}

const state = { shoppingCart: loadState()}

const store = configureStore(state);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ModalProvider>
        <App />
      </ModalProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
