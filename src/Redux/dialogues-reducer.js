const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE';

const dialoguesReducer = (state, action) => {
  if (action.type === SEND_MESSAGE) {
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
  }
  else if (action.type === UPDATE_NEW_MESSAGE) {
    state.currentMessage.message = action.message;
  }

  return state
}

export default dialoguesReducer;