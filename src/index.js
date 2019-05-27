import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,Route} from 'react-router-dom'
import './assets/css/base.css'
import './assets/css/ydui.css'
import config from './config'
window.baseUrl = config.baseUrl.localhost_https;
import App from './components/App.js'
import store from './store';
import {Provider} from 'react-redux';
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Route component={App}/>
    </BrowserRouter>
  </Provider>, 
document.getElementById('root'));


