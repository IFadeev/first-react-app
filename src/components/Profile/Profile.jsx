import React from 'react';
import profile from './Profile.module.css'
import Posts from './Posts/Posts';
import Profileinfo from './Profileinfo/Profileinfo';  
import Friends from '../Friends/Friends';

const Profile = (props) => {


  return (
    <section className={profile.content}>

              <Profileinfo/>

              <Posts postData = {props.profilePage.postData} />

           {/*} <Friends/> */}
    </section>
  );
}

export default Profile;