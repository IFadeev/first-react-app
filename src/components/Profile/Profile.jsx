import React from 'react';
import profile from './Profile.module.css'
import Posts from './Posts/Posts';
import Profileinfo from './Profileinfo/Profileinfo'


const Profile = (props) => {


  return (
    <section className={profile.content}>

              <Profileinfo/>

              <Posts postData = {props.postData} />
    </section>
  );
}

export default Profile;