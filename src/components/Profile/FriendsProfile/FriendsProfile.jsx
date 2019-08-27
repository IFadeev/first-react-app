import React from 'react';
import friends from './FriendsProfile.module.css';
import { NavLink } from 'react-router-dom';
import friendsItem from './FriendsProfile.module.css';

const FriendsProfile = (props) => {
let frindsElement = props.frinedsData.map( frined => <FriendsProfileItem name={frined.name} />);

  return (

      <div className={friends.friendsColumn}>
        
          {frindsElement}

      </div>

  );
};

const FriendsProfileItem = (props) => {

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

export default FriendsProfile;