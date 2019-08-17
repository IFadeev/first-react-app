const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE';

const dialoguesReducer = (state, action) => {
  if (action.type === SEND_MESSAGE) {
    let newMessage = {
      id: 5, 
      name: 'Ivan',
      surname: 'Fadeev',
      message: this._state.dialogPage.currentMessage.message,
      get fullName(){
        return `${this.name} ${this.surname}`
        }
      };

      state.dialogPage.messagesData.push(newMessage);
      state.dialogPage.currentMessage.message = '';
  }
  else if (action.type === UPDATE_NEW_MESSAGE) {
    state.dialogPage.currentMessage.message = action.message;
  }

  return state
}

export default dialoguesReducer;