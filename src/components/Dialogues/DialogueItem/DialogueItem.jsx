import React from 'react';
import dialog from './DialogueItem.module.css'
import { NavLink } from 'react-router-dom';

const DialogueItem = (props) => {

  const path = '/Dialogues/' + props.id;
  return (
    <NavLink to={path}>
      <div className={dialog.diaolgs__item}>

        <div className={dialog.imager}>
          <img className={dialog.img} src={require("../../../post-item-img.png")} ></img>
        </div>
        <div className={dialog.messages__content}>
          <div className={dialog.header}> {props.fullName} </div>
          <div className={dialog.text}> {props.text} </div>
        </div>
        
      </div>
    </NavLink>
  );  
}

export default DialogueItem;