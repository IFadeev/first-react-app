import React from 'react';
import profile from './Profile.module.css'
import Posts from './Posts/Posts';
import Profileinfo from './Profileinfo/Profileinfo';  
import Friends from '../Friends/Friends';

const Profile = (props) => {
  return (
    <section className={profile.content}>
              <Profileinfo friendsData = {props.frinedsPage} 
                           postData = {props.profilePage.postData} 
                           currentPostData = {props.profilePage.currentPostData}
                           dispatch = {props.dispatch}/>
            {/*} <Friends/> */}
    </section>
  );
}
export default Profile;