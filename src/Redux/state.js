import {rerendreEntireTree} from '../render';

let state = {
  profilePage: {
    postData: [
      {
        id: 1,
        name: 'Ivan',
        surname: 'Fadeev',
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
        get fullName(){
          return `${this.name} ${this.surname}`
        },
        message: 'I learning REACT!!',
        date: '04.08.19',
      },
    ],
    currentPostData: 
      {
        message: ''
      }
  },
  
  dialogPage: {
    messagesData : [
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
  ],
    chatsData: [
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
  ],  
  },

  frinedsPage: [
    { id: 1, 
      name: 'Dmitriy',
      surname: 'Menshikov',
      get fullName(){
        return `${this.name} ${this.surname}`
      }
    },
    { id: 2, 
      name: 'Alex',
      surname: 'Subbutin',
      get fullName(){
        return `${this.name} ${this.surname}`
      }
    },
    { id: 3, 
      name: 'Vladimir',
      surname: 'Kustov',
      get fullName(){
        return `${this.name} ${this.surname}`
      }
    },
    { id: 4, 
      name: 'Andrey',
      surname: 'Egorov',
      get fullName(){
        return `${this.name} ${this.surname}`
      }
    }
  ]
}

export let addPost = () => {
  //let nowDate = new Date();   
  let newPost = { 
    id: 5,
    name: 'Ivan',
    surname: 'Fadeev',
    get fullName(){
      return `${this.name} ${this.surname}`
  },
    message: state.profilePage.currentPostData.message,
    date: '08.11.19'
};
  state.profilePage.postData.push(newPost);
  state.profilePage.currentPostData.message = '';
  rerendreEntireTree(state);
}

export let updatePostTextarea = (currentPostmessage) => {
  state.profilePage.currentPostData.message = currentPostmessage;
  rerendreEntireTree(state);
}

export let addMessage = (Message) => {
  let newMessage = {
    id: 5, 
    name: 'Ivan',
    surname: 'Fadeev',
    message: Message,
    get fullName(){
      return `${this.name} ${this.surname}`
      }
    };

    state.dialogPage.messagesData.push(newMessage);
    rerendreEntireTree(state);
  }




export default state;