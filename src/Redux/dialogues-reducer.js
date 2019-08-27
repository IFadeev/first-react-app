const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE';

let initialState = {
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
}

const dialoguesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:     
      let newMessage = {
        id: 5, 
        name: 'Ivan',
        surname: 'Fadeev',
        message: state.currentMessage.message,
        get fullName(){
          return `${this.name} ${this.surname}`
          }
        };
        state.messagesData.push(newMessage);
        state.currentMessage.message = '';
        return state
    case UPDATE_NEW_MESSAGE:
      state.currentMessage.message = action.message;
      return state
    default: 
      return state
  }  
}

export const sendMessageActionCreator = (messageText) => 
({type: SEND_MESSAGE, message: messageText})
export const updateMessageActionCreator = (messageText) =>
({type: UPDATE_NEW_MESSAGE, message: messageText})

export default dialoguesReducer;