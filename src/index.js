import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import Header form './Header'
import * as serviceWorker from './serviceWorker';

debugger;
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

let messagesData = [
  { id: 4, 
    name: 'Vladimir',
    surname: 'Kustov',
    message: 'Ваня, привет!!!!!',
    get fullName(){
      return `${this.name} ${this.surname}`
    }
  },
  { id: 4, 
    name: 'Vladimir',
    surname: 'Kustov',
    message: 'Чем занимаетесь?!',
    get fullName(){
      return `${this.name} ${this.surname}`
    }
  },
  { id: 4, 
    name: 'Vladimir',
    surname: 'Kustov',
    message: 'Как дела вообще?!',
    get fullName(){
      return `${this.name} ${this.surname}`
    }
  },
];

let chatsData = [
  { id: 1, 
    name: 'Ivan',
    surname: 'Fadeev',
    message: 'Привет!',
    get fullName(){
      return `${this.name} ${this.surname}`
    }
  },
  { id: 2, 
    name: 'Dmitriy',
    surname: 'Menshikov',
    message: 'Привет, Что делаешь?',
    get fullName(){
      return `${this.name} ${this.surname}`
    }
  },
  { id: 3, 
    name: 'Alex',
    surname: 'Subbutin',
    message: 'Пока!',
    get fullName(){
      return `${this.name} ${this.surname}`
    }
  },
  { id: 4, 
    name: 'Vladimir',
    surname: 'Kustov',
    message: 'ОуО!',
    get fullName(){
      return `${this.name} ${this.surname}`
    }
  }
]

ReactDOM.render(<App postData = {postData} messagesData = {messagesData} chatsData = {chatsData}/> , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
