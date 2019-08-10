import React from 'react';
import { NavLink } from 'react-router-dom';
import friendsItem from './FriendsProfileItem.module.css'


const FriendsItem = (props) => {

  return (
    
    <div className = {friendsItem.friendsColumn__frined}>
          <div className = {friendsItem.friendsColumn__img}>
            </div>
            <div className = {friendsItem.friendsColumn__name}>
            {props.name}
            </div>
    </div>

  );
}

export default FriendsItem;