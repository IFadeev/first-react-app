import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import App from './App';

import state, {subscribe} from './Redux/state'
import './index.css';

import { addPost, updatePostTextarea, addMessage, updateMessage } from './Redux/state';

let rerendreEntireTree = () => {
  ReactDOM.render(<App appState = {state} 
                        addPost = {addPost}
                        updatePostTextarea = {updatePostTextarea} 
                        addMessage = {addMessage}
                        updateMessage = {updateMessage}/>, 
                        document.getElementById('root'));
  }

  rerendreEntireTree(state);

  subscribe(rerendreEntireTree);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();