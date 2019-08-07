import React from 'react';
import dialog from './Message.module.css';

const Message = (props) => {
  return (
    <div className={dialog.messages__item}>
      <div className={dialog.imager}>
        <img className={dialog.img} src={require("../../../post-item-img.png")} ></img>
      </div>
      <div className={dialog.messages__content}>
        <div className={dialog.header}> {props.fullName} </div>
        <div className={dialog.text}> {props.text}</div>
      </div>

    </div>
  );
}

export default Message;