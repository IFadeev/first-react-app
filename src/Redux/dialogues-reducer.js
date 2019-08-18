const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE';

const dialoguesReducer = (state, action) => {
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

export default dialoguesReducer;