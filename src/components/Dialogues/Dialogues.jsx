import React from 'react';
import dialog from './Dialogues.module.css'

const Dialogues = (props) => {
  return (
    <div className = {dialog.wrapper}> 
        <div className = {dialog.diaolgs__content}>


          <div className = {dialog.diaolgs__item}>
            <div className = {dialog.imager}>
              <img className = {dialog.img} src={require("../../post-item-img.png")} ></img> 
            </div>
            <div className = {dialog.messages__content}>
              <div className = {dialog.header}>Alex Bot</div>
              <div className = {dialog.text}>Hello, world! You are amazing!</div>
            </div>
        </div>


        <div className = {dialog.diaolgs__item}>
            <div className = {dialog.imager}>
              <img className = {dialog.img} src={require("../../post-item-img.png")} ></img> 
            </div>
            <div className = {dialog.messages__content}>
              <div className = {dialog.header}>Alex Bot</div>
              <div className = {dialog.text}>Hello, world! You are amazing!</div>
            </div>
        </div>


      </div>
      <div className = {dialog.messages}>
        <div className = {dialog.messages__item}>

          <div className = {dialog.imager}>
              <img className = {dialog.img} src={require("../../post-item-img.png")} ></img> 
            </div>
            <div className = {dialog.messages__content}>
              <div className = {dialog.header}>Alex Bot</div>
              <div className = {dialog.text}>Hello, world! You are amazing!</div>
            </div>
          
        </div>

        <div className = {dialog.messages__item}>

          <div className = {dialog.imager}>
              <img className = {dialog.img} src={require("../../post-item-img.png")} ></img> 
            </div>
            <div className = {dialog.messages__content}>
              <div className = {dialog.header}>Alex Bot</div>
              <div className = {dialog.text}>Hello, world! You are amazing!</div>
            </div>
          
        </div>

        <div className = {dialog.messages__item}>

          <div className = {dialog.imager}>
              <img className = {dialog.img} src={require("../../post-item-img.png")} ></img> 
            </div>
            <div className = {dialog.messages__content}>
              <div className = {dialog.header}>Alex Bot</div>
              <div className = {dialog.text}>Hello, world! You are amazing!</div>
            </div>
          
        </div>

        <div className = {dialog.messages__item}>

          <div className = {dialog.imager}>
              <img className = {dialog.img} src={require("../../post-item-img.png")} ></img> 
            </div>
            <div className = {dialog.messages__content}>
              <div className = {dialog.header}>Alex Bot</div>
              <div className = {dialog.text}>Hello, world! You are amazing!</div>
            </div>
          
        </div>


      </div>
    </div>
  );
}

export default Dialogues;