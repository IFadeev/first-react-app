import React from 'react';
import Dialogues from './Dialogues';
import {sendMessageActionCreator, updateMessageActionCreator} from '../../Redux/dialogues-reducer';
import StoreContext from '../../StoreContext';


const DialoguesContainer = (props) => {
  return ( 
    <StoreContext.Consumer>
      { (store) => {      
        let onSendMessage = (message) => {
          store.dispatch(sendMessageActionCreator(message));
        }

        let onUpdateMessage = (message) => {
          store.dispatch(updateMessageActionCreator(message));
        }
      return <Dialogues onSendMessage = {onSendMessage}
                      onUpdateMessage = {onUpdateMessage}
                       currentMessage = {store.getState().dialogPage.currentMessage}
                         messagesData = {store.getState().dialogPage.messagesData}
                            chatsData = {store.getState().dialogPage.chatsData} 
              />
          }
      }
    </StoreContext.Consumer>
  )
}

export default DialoguesContainer;