import React from 'react';
import dialog from './Dialogues.module.css';
import DialogueItem from './DialogueItem/DialogueItem';
import Message from './Message/Message';

const Dialogues = (props) => {
  
  let Data =[[]]

  let chatsData = [
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
  ]


  let messagesData = [
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
  ];

  let mssageElement = messagesData.map( dialog => <Message fullName ={dialog.fullName} text={dialog.message}/>);

  let chatsDataElements = chatsData.map( dialog => <DialogueItem fullName={dialog.fullName} text={dialog.message}/>); 
  
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