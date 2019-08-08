import React from 'react';
import dialog from './Dialogues.module.css';
import DialogueItem from './DialogueItem/DialogueItem';
import Message from './Message/Message';

const Dialogues = (props) => {

  let mssageElement = props.dialogPage.messagesData.map( dialog => <Message fullName ={dialog.fullName} text={dialog.message}/>);

  let chatsDataElements = props.dialogPage.chatsData.map( dialog => <DialogueItem fullName={dialog.fullName} text={dialog.message} id={dialog.id}/>); 
  
  return (
    <div className={dialog.wrapper}>
      <div className={dialog.diaolgs__content}>
        
        {chatsDataElements};

      </div>

      <div className={dialog.messages}>

        {mssageElement};

      </div>
    </div>
  );
}

export default Dialogues;