import React from 'react';
import dialog from './Dialogues.module.css';
import { NavLink } from 'react-router-dom';



const Dialogues = (props) => {
  
  let messagesData = [
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

  let dialodElements = messagesData.map( dialog => <DialogueItem fullName={dialog.fullName} text={dialog.message}/>); 

  console.log(<DialogueItem/>)

  return (
    <div className={dialog.wrapper}>
      <div className={dialog.diaolgs__content}>
        
        {dialodElements};

      </div>

      <div className={dialog.messages}>

        {dialodElements};

      </div>
    </div>
  );
}

const DialogueItem = (props) => {

  const path = '/Dialogues/' + props.id;
  return (
    <NavLink to={path}>
      <div className={dialog.diaolgs__item}>
        <div className={dialog.imager}>
          <img className={dialog.img} src={require("../../post-item-img.png")} ></img>
        </div>
        <div className={dialog.messages__content}>
          <div className={dialog.header}> {props.fullName} </div>
          <div className={dialog.text}> {props.text} </div>
        </div>
      </div>
    </NavLink>
  );
}

const Message = (props) => {
  return (
    <div className={dialog.messages__item}>
      <div className={dialog.imager}>
        <img className={dialog.img} src={require("../../post-item-img.png")} ></img>
      </div>
      <div className={dialog.messages__content}>
        <div className={dialog.header}> {props.fullName} </div>
        <div className={dialog.text}> {props.text}</div>
      </div>

    </div>
  );
}

export default Dialogues;