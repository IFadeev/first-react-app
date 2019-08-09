import React from 'react';
import { NavLink } from 'react-router-dom';
import friendsItem from './FriendsItem.module.css'


const FriendsItem = (props) => {

  return (
    
    <div className={friendsItem.friends__item}>

    <div className={friendsItem.imager}>
      <img className={friendsItem.img} src={require("../../../post-item-img.png")} ></img>
    </div>

    <div className={friendsItem.friends__content}>
      <div className={friendsItem.header}> {props.fullName}  </div>
      
    </div>

  </div>

  );
}

export default FriendsItem;