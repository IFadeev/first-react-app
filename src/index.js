import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import Header form './Header'
import * as serviceWorker from './serviceWorker';


let postData = [
  {
    id: 1,
    name: 'Ivan',
    surname: 'Fadeev',
    message: 'ОуО!',
    get fullName(){
      return `${this.name} ${this.surname}`
    },
    message: 'Hello, world!',
    date: '04.08.19'
  },
  {
  id: 2,
    name: 'Ivan',
    surname: 'Fadeev',
    message: 'ОуО!',
    get fullName(){
      return `${this.name} ${this.surname}`
    },
    message: 'Another one!',
    date: '04.08.19',
  },
  {
    id: 3,
    name: 'Ivan',
    surname: 'Fadeev',
    message: 'ОуО!',
    get fullName(){
      return `${this.name} ${this.surname}`
    },
    message: 'I learning REACT!!',
    date: '04.08.19',
  },
];

ReactDOM.render(<App postData = {postData}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
