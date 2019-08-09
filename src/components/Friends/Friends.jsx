import React from 'react';
import friends from './Friends.module.css';
import { NavLink } from 'react-router-dom';
import FriendsItem from './FriendsItem/FriendsItem';


const Friends = (props) => {

let frindsElement = props.dialogPage.
map( frined => <FriendsItem fullName={frined.fullName} />);

  return (

      <div className={friends.friends__wrapper}>
        <div className = {friends.block__wrapper}>
      
          {frindsElement}

        </div>
      </div>

  );
}
export default Friends;