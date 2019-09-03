import React from 'react';
import friends from './Friends.module.css';
import { NavLink } from 'react-router-dom';
import FriendsItem from './FriendsItem/FriendsItem';
import StoreContext from '../../StoreContext';


const Friends = (props) => {

  return (
    <StoreContext.Consumer> 
      { (store) => {
        let frindsElement = store.getState().frinedsPage.frinedsPage.map( 
          frined => <FriendsItem fullName = {frined.fullName} />);
        return (    
          <div className={friends.friends__wrapper}>
            <div className = {friends.block__wrapper}>
              {frindsElement}
            </div>
          </div>
          )
        }
      }
    </StoreContext.Consumer>
  );
}
export default Friends;