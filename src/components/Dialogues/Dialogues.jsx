import React from 'react';
import dialog from './Dialogues.module.css';
import DialogueItem from './DialogueItem/DialogueItem';
import Message from './Message/Message';
import {sendMessageActionCreator, updateMessageActionCreator} from '../../Redux/dialogues-reducer';


const Dialogues = (props) => {

  let mssageElement = props.dialogPage.messagesData.map( dialog => 
  <Message fullName = {dialog.fullName} 
               text = {dialog.message}/>);

  let chatsDataElements = props.dialogPage.chatsData.map( dialog => 
  <DialogueItem fullName = {dialog.fullName} 
                    text = {dialog.message} 
                      id = {dialog.id}/>); 
    

  let sendMessage = (event) => {
    let message = event.target.value;
    props.onSendMessage(message);
  }

  /*Функция реагирует на изменение в поле ввода сообщения и 
  отправляет данные в state.js*/
  let updateMessage = (event) => {
    let message = event.target.value;
    props.onUpdateMessage(message);
  }

  return (
    <div className={dialog.wrapper}>
      <div className={dialog.diaolgs__content}>
        
        {chatsDataElements};

      </div>

      <div className={dialog.messagesBlock}>
        <div className={dialog.messages}>

          {mssageElement}

        </div>

        <div className={dialog.textareaFild}>
            <textarea onChange = { updateMessage } value ={props.dialogPage.currentMessage.message} placeholder="Write here a message.."></textarea>
            <button onClick ={ sendMessage } >Send</button>
        </div>

      </div>

    </div>
  );
}

export default Dialogues;