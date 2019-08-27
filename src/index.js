import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import App from './App';

import store from './Redux/redux-store';
import './index.css';

let rerendreEntireTree = (state) => {
  ReactDOM.render(<App appState = {state} 
                       dispatch = {store.dispatch.bind(store)}/>, 
                       document.getElementById('root'));
  }

  rerendreEntireTree(store.getState());

  store.subscribe(() => {
    let state = store.getState();
    rerendreEntireTree(state);
  });

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();