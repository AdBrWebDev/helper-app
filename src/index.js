import React from 'react';
import reportWebVitals from './reportWebVitals';
import './App.css';
import App from './App';
import {createRoot} from 'react-dom/client'

const Apps = () => {
  <App />
}

/*ReactDOM.render(
  <Provider store={store}>
      <App />
  </Provider>,
  document.getElementById('root')
);*/

const container = document.getElementById("root")
const root = createRoot(container)
root.render(<Apps />)
root.unmount();

reportWebVitals();