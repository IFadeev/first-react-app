const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST = 'UPDATE-NEW-POST';
const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE';


let store = {
  _state : {
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
      currentMessage: {
        message: '',
      },
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
  },
  _callSubscriber() {
  },

  get getState() {
    return this._state;
  },
  _addPost() {
    //let nowDate = new Date();   
    let newPost = { 
      id: 5,
      name: 'Ivan',
      surname: 'Fadeev',
      get fullName(){
        return `${this.name} ${this.surname}`
    },
      message: this._state.profilePage.currentPostData.message,
      date: '08.11.19'
  };
    this._state.profilePage.postData.push(newPost);
    this._state.profilePage.currentPostData.message = '';
    this._callSubscriber(this._state);
  },
  
  _updatePostTextarea(currentPostmessage) {
    this._state.profilePage.currentPostData.message = currentPostmessage;
    this._callSubscriber(this._state);
  },
  _addMessage(message) {
    let newMessage = {
      id: 5, 
      name: 'Ivan',
      surname: 'Fadeev',
      message: message,
      get fullName(){
        return `${this.name} ${this.surname}`
        }
      };
  
      this._state.dialogPage.messagesData.push(newMessage);
      this._state.dialogPage.currentMessage.message = '';
      this._callSubscriber(this._state);
  },
  _updateMessage(currentMessageData) {
    this._state.dialogPage.currentMessage.message = currentMessageData;
    this._callSubscriber(this._state);
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    switch(action.type) {
      case 'ADD-POST': this._addPost();
      break;
      case 'UPDATE-NEW-POST': this._updatePostTextarea(action.text)
      break;
      case 'SEND-MESSAGE': this._addMessage(action.message);
      break;
      case 'UPDATE-NEW-MESSAGE': this._updateMessage(action.message)
   
    }
  },
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updatePosActionCreator = (postText) => 
({type: UPDATE_NEW_POST, text: postText})

export const sendMessageActionCreator = (messageText) => 
({type: SEND_MESSAGE, message: messageText})
export const updateMessageActionCreator = (messageText) =>
({type: UPDATE_NEW_MESSAGE, message: messageText})

window.store = store;
export default store;