import React from 'react';
import friends from './FriendsProfile.module.css';
import { NavLink } from 'react-router-dom';
import FriendsItem from './FriendsProfileItem/FriendsProfileItem';


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