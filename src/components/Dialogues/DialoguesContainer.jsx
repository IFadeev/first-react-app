import React from 'react';
import Dialogues from './Dialogues';
import {sendMessageActionCreator, updateMessageActionCreator} from '../../Redux/dialogues-reducer';


const DialoguesContainer = (props) => {
  
  let state = props.store.getState().dialogPage;

  let onSendMessage = (message) => {
    props.dispatch(sendMessageActionCreator(message));
  }

  let onUpdateMessage = (message) => {
    props.dispatch(updateMessageActionCreator(message));
  }

  return <Dialogues onSendMessage = {onSendMessage}
                  onUpdateMessage = {onUpdateMessage}
                   currentMessage = {state.currentMessage}
                     messagesData = {state.messagesData}
                        chatsData = {state.chatsData} 
          />
}

export default DialoguesContainer;