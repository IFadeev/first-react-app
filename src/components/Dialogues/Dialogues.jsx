import React from 'react';
import dialog from './Dialogues.module.css';
import DialogueItem from './DialogueItem/DialogueItem';
import Message from './Message/Message';

const Dialogues = (props) => {

  let mssageElement = props.dialogPage.messagesData.map( dialog => <Message fullName ={dialog.fullName} text={dialog.message}/>);

  let chatsDataElements = props.dialogPage.chatsData.map( dialog => <DialogueItem fullName={dialog.fullName} text={dialog.message} id={dialog.id}/>); 

  let newMessage = React.createRef();

  let sendMessage = () => {
    let text = newMessage.current.value;
    text ? alert('Вы отпраили сообщение!: ' + text) :
    alert('Сообщение пустое!')
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
            <textarea ref={newMessage}  placeholder="Write here a message.."></textarea>
            <button onClick ={ sendMessage} >Send</button>
        </div>

      </div>

    </div>
  );
}

export default Dialogues;