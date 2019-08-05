import React from 'react';
import dialog from './Dialogues.module.css'

const Dialogues = (props) => {
  return (
    <div className = {dialog.wrapper}>
      <div className = {dialog.diaolgs__items}></div>
      <div className = {dialog.messages}></div>
    </div>
  );
}

export default Dialogues;