import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import App from './App';

import store from './Redux/state';
import './index.css';

let rerendreEntireTree = () => {
  ReactDOM.render(<App appState = {store.getState()} 
                        addPost = {store.addPost.bind(store)}
                        updatePostTextarea = {store.updatePostTextarea.bind(store)} 
                        addMessage = {store.addMessage.bind(store)}
                        updateMessage = {store.updateMessage.bind(store)}/>, 
                        document.getElementById('root'));
  }

  rerendreEntireTree();

  store.subscribe(rerendreEntireTree);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();