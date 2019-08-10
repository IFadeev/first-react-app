import React from 'react';
import friends from './FriendsProfile.module.css';
import { NavLink } from 'react-router-dom';
import FriendsItem from './FriendsProfileItem/FriendsProfileItem';


const FriendsProfile = (props) => {

let frindsElement = props.dialogPage.
map( frined => <FriendsItem name={frined.name} />);

  return (

      <div className={friends.friendsColumn}>
        
          {frindsElement}

      </div>

  );
}
export default FriendsProfile;