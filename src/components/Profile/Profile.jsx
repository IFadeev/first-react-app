import React from 'react';
import profile from './Profile.module.css'
import Posts from '../Posts/Posts';
import Profileinfo from './Profileinfo/Profileinfo'


const Profile = () => {
  return (
    <section className={profile.content}>

              <Profileinfo/>

              <Posts/>

    </section>
  );
}

export default Profile;