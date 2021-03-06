import React from 'react';
import friends from './Friends.module.css';
import FriendsItem from './FriendsItem/FriendsItem';

const Friends = (props) => {
  let frindsElement = props.frinedsPage.map( frined => <FriendsItem fullName={frined.fullName} />);
    
  return (
          <div className={friends.friends__wrapper}>
            <div className = {friends.block__wrapper}>
              {frindsElement}
            </div>
          </div>
   );
  }
  export default Friends;