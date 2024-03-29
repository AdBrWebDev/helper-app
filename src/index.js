import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import './App.css';
import App from './App';
import {createStore} from 'redux';
import {Provider} from 'react-redux'
import Reducer from '../src/components/Reducer'
const store = createStore(Reducer)

ReactDOM.render(
  <Provider store={store}>
      <App />
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();