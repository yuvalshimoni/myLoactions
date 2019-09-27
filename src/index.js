import ReactDOM from 'react-dom';
import React from 'react';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { BrowserRouter } from "react-router-dom";

// Store
import middleware from './middleware'
import appReducer from './reducers'

// app
import './index.css';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import App from './App'

const store = createStore(appReducer, middleware)

ReactDOM.render(
  <BrowserRouter>
    <Provider store={ store }>
      <App/>
    </Provider>
  </BrowserRouter>, 
document.getElementById('root'))
